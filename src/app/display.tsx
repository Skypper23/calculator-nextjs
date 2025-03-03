"use client";

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return (
    <div className="bg-amber-950 h-28 col-span-4 text-right text-xl content-center pr-4 rounded-md">
      {value}
    </div>
  );
}