"use client";

import { useState, useEffect } from "react";
import Display from "./display";
import Button from "./button";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousDisplay, setPreviousDisplay] = useState("");

  const handleClick = (value: string) => {
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };

  const igual = ()=>{
    try{
      const resultado = eval(display).toString();
      setDisplay(resultado);
      setPreviousDisplay(resultado);
    }catch(err){
      console.log(err);
    }
  }

  const ans = ()=>{
    try{
      setDisplay((prev) => (prev === "0" ? previousDisplay : prev + previousDisplay));
    }catch(err){
      console.log(err);
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    // Ignora se a tecla pressionada não for um número ou uma operação
    const key = event.key;
    if (key === "Enter") {
      // Para calcular o resultado, você pode chamar sua função igual aqui
      igual();
    } else if (key === "Backspace") {
      // Exemplo para apagar o último caracter
      setDisplay(display.slice(0, -1));
    } else if ("0123456789+-*/.%".includes(key)) {
      // Para números ou operações, adicione ao display
      setDisplay((prev) => (prev === "0" ? key : prev + key));
    }
  };


  useEffect(() => {
    // Adiciona o evento keydown ao documento
    const handle = (event: KeyboardEvent) => handleKeyDown(event);
    document.addEventListener("keydown", handle);

    // Cleanup do event listener
    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [display]);

  return (
    <div className="flex justify-center bg-gray-100 h-dvh">
      <div className="grid grid-cols-4 gap-4 rounded-md text-center m-auto p-4 bg-amber-50 text-amber-200 h-8/12 w-3/12 justify-center shadow-xl">
        <Display value={display} />
        <Button label="C" onClick={() => setDisplay("0")} />
        <Button label="%" onClick={handleClick} />
        <Button label="/" onClick={handleClick} />
        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="*" onClick={handleClick} />
        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="-" onClick={handleClick} />
        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="+" onClick={handleClick} />
        <Button label="0" onClick={handleClick} />
        <Button label="." onClick={handleClick} />
        <Button label="Ans" onClick={ans} />
        <Button label="=" onClick={igual} />
      </div>
    </div>
  );
}