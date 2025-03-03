"use client";

interface ButtonProps {
  label: string;
  onClick: (value: string) => void;
  span?: number; // Para botões que ocupam mais de uma coluna
}

export default function Button({ label, onClick, span = 1 }: ButtonProps) {
  return (
    <button
      className={`bg-amber-950 h-16 col-span-${span} flex items-center justify-center rounded-md text-xl cursor-pointer hover:bg-amber-800`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}