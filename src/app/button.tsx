"use client";

interface ButtonProps {
  label: string;
  onClick: (value: string) => void;
  span?: number; // Para botões que ocupam mais de uma coluna
}

export default function Button({ label, onClick, span = 1 }: ButtonProps) {
  if(label==='C'){
    return (
      <button
        className={`bg-amber-950 h-16 col-span-2 flex items-center justify-center rounded-md text-xl cursor-pointer hover:bg-amber-800`}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    );
  }else{
    return (
      <button
        className={`bg-amber-950 h-16 col-span-1 flex items-center justify-center rounded-md text-xl cursor-pointer hover:bg-amber-800`}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    );
  }
}