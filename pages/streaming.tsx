import Head from "next/head"
import Menu from "../components/menu"

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
                        <button className="my-8 w-full h-12 md:tracking-wider text-white font-bold bg-blue-400 rounded-3xl">
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