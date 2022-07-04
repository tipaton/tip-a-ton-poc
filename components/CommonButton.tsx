export default function CommonButton({title}: {title: string}) {
    return (
        <div className="group relative w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>
            <div className="justify-center relative flex space-x-4 text-white bg-black px-7 py-4 transition duration-200 rounded-lg hover:text-turqoise">
                <span className="font-poppins text-lg capitalize tracking-wider transition duration-200 group-hover:text-turqoise">{title}</span>
            </div>
        </div>
    )
}