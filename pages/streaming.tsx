import Head from "next/head"
import Menu from "../components/menu"
import TonWeb from "tonweb"

async function sendTon() {
    const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC', {apiKey: process.env.TON_API_KEY}));
    const STREAMER_WALLET= "kQD-Ep5DdcrrQ51walRI5ICOoKybLXeJMGaGMzjnBSiXUBwt"
    const FAN_WALLET = "EQDtQvEahQNDK3fwRSUKLto315NZLWxJYhGTzV402Y-0lF2U"
    const BN = TonWeb.utils.BN;
    const toNano = TonWeb.utils.toNano;
    const walletFan = tonweb.wallet.create({address: FAN_WALLET});

    const address = await walletFan.getAddress();

    const seqno = await walletFan.methods.seqno().call();

    const channelInitState = {
        balanceStreamer: toNano('1'), // A's initial balance in Toncoins. Next A will need to make a top-up for this amount
        balanceFan: toNano('2'), // B's initial balance in Toncoins. Next B will need to make a top-up for this amount
        seqnoA: new BN(0), // initially 0
        seqnoB: new BN(0)  // initially 0
    };

    const channelConfig = {
        channelId: new BN(124), // Channel ID, for each new channel there must be a new ID
        addressStreamer: STREAMER_WALLET, // A's funds will be withdrawn to this wallet address after the channel is closed
        addressFan: FAN_WALLET, // B's funds will be withdrawn to this wallet address after the channel is closed
        initBalanceStreamer: channelInitState.balanceStreamer,
        initBalanceFan: channelInitState.balanceFan
    }

    const channelA = tonweb.payments.createChannel({
        ...channelConfig,
        isA: true,
        myKeyPair: keyPairA,
        hisPublicKey: keyPairB.publicKey,
    });
    const channelB = tonweb.payments.createChannel({
        ...channelConfig,
        isA: false,
        myKeyPair: keyPairB,
        hisPublicKey: keyPairA.publicKey,
    });
    const channelAddress = await channelA.getAddress(); // address of this payment channel smart-contract in blockchain
    console.log('channelAddress=', channelAddress.toString(true, true, true));
    
    const fromWalletFan = channelA.fromWallet({
        wallet: walletFan,
        secretKey: keyPairA.secretKey
    });
    await fromWalletFan.deploy().send(toNano('1'));
    // To check you can use blockchain explorer https://testnet.tonscan.org/address/<CHANNEL_ADDRESS>
    // We can also call get methods on the channel (it's free) to get its current data.

    console.log(await channelA.getChannelState());
    const data = await channelA.getData();

    const channelState1 = {
        balanceStreamer: toNano('2'),
        balanceFan: toNano('1'),
        seqnoA: new BN(1),
        seqnoB: new BN(0)
    };

    // A signs this state and send signed state to B (e.g. via websocket)

    const signatureA1 = await channelA.signState(channelState1);

    // B checks that the state is changed according to the rules, signs this state, send signed state to A (e.g. via websocket)

    if (!(await channelB.verifyState(channelState1, signatureA1))) {
        throw new Error('Invalid A signature');
    }
    const signatureB1 = await channelB.signState(channelState1);

    const signatureCloseB = await channelB.signClose(channelState1);

    if (!(await channelA.verifyClose(channelState1, signatureCloseB))) {
        throw new Error('Invalid B signature');
    }

    await fromWalletFan.close({
        ...channelState1,
        hisSignature: signatureCloseB
    }).send(toNano('1'));

}

export default function Streaming() {
   
    return (
        <div>
        <Head>
          <title>Streaming - Tip-A-Ton</title>
          <meta name="description" content="Tip your creator with Ton" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-full bg-gray-900">
          <Menu />
          <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <h1 className="text-3xl md:text-5xl text-white font-bold">Mobile Legend: Bang Bang</h1>
                <div className="flex-col space-y-8 md:space-y-0 py-8 md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
                    <div className="w-full md:col-span-2">
                        <iframe 
                            height={390}
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/b4Ck7wfVBFw" 
                            title="YouTube video player">
                        </iframe>
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex-col text-white">
                            <h2 className="text-2xl font-bold">Jess No Limit</h2>
                            <span>Trying to play Odette! Come and support me to get all the nice skins</span>
                        </div>
                        <div className="flex align-center text-center text-white my-8 space-x-4">
                            <span className="font-bold">Total Tips: </span>
                            <span className="text-2xl font-bold text-blue-400 md:tracking-wider">100 TON</span>
                        </div>
                        <button onClick={sendTon} className="my-8 w-full h-12 md:tracking-wider text-white font-bold bg-blue-400 rounded-3xl">
                            TIP 1 TON
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}