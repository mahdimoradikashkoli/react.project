interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:"contained" | "text" | "outline",
    children:string
}

export const Button:React.FC<buttonProps> = ({variant,children,...restprops}) => {
    
    const buttonStyle={
        contained:"bg-blue-700   hover:bg-blue-800 active:bg-blue-900",
        outline:"border-2 border-blue-900 ",
        text:"hover:bg-blue-400 active:bg-blue-700"
    }

  return (
    <button className={`${buttonStyle[variant ?? "text" ]} ${restprops.className} w-full rounded-2xl text-lg px-5 py-3`}>
      {children}
    </button>
  );
};
