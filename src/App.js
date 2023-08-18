import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Carrousel from "./Components/Carrousel";

function App() {
  return (
    <div className="flex flex-col">
      <Carrousel />
      <div className="container mx-auto px-4">
        <div className="overflow-hidden flex items-center">
          <img className="w-36 my-12" src="PAOLA20/chihuahua.webp" />
          <h1 className="text-3xl font-bold my-11 text-center text-rose-700">
          PARA: EL AMOR DE MI VIDA
        </h1>
        </div>
        
        <div className="border rounded-xl border-solid border-rose-400 p-4 mb-5">
          <p className="pb-3 text-justify">
            El día de hoy, pero hace 20 años, llegaste al mundo; el mejor regalo
            que pude pedir. Quiero que en este día te des cuenta de lo mucho que
            te amo. Cada latido de mi corazón pregunta por ti. Eres la razón por
            la que mis días brillan, eres el café de todas mis mañanas, jajaaja.
          </p>
          <p className="pb-3 text-justify">
            Me encantas físicamente y, ¿cómo no? Si tu sonrisa me saca de mis
            días oscuros, tu cuerpo me enciende a cada rato, tus ojos me hacen
            el hombre más feliz y hacen que no quiera dejar de verlos.
          </p>
          <p className="pb-3 text-justify">
            No sabes cuánta falta me hacen tus abrazos, tus caricias y el tiempo
            a tu lado. Cada momento que he pasado contigo es inolvidable. En
            este día especial, deseo regalarte todo el amor y felicidad que
            mereces, porque tu felicidad es mi mayor alegría.
          </p>
          <p className="pb-3 text-justify">
            Feliz cumpleaños, mi amor. Que este día marque el comienzo de un
            nuevo capítulo en nuestra historia, un capítulo lleno de amor, risas
            y sueños cumplidos. Siempre estaré a tu lado, celebrando tus
            triunfos, apoyándote en tus desafíos y amándote en cada momento.
          </p>
          <div className="w-full flex justify-end">
            <h5 className="pr-12">-John-</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
