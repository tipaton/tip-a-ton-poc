interface ButtonProps {
    title: string,
    className?: string
}

export default function CommonButton({ title, className }: ButtonProps) {
  return (
    <div className={className ? `${className} group relative w-full` : 'group relative w-full'}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg opacity-30 blur transition duration-1000 group-hover:opacity-100" />
      <div className="relative flex justify-center py-2 space-x-4 text-white transition duration-200 bg-blue-400 rounded-lg px-7 hover:text-turqoise">
        <span className="tracking-wider capitalize transition duration-200 font-poppins text-md group-hover:text-turqoise">{title}</span>
      </div>
    </div>
  );
}
