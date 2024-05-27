//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header"
import Card from "@/components/Card"


const nome = 'Matheus'
let canal = 'Noobzinho'


function Topo() {
  return (
    <div>
      <h1>Olá {nome}! Seja bem vindo ao {canal}</h1>
    </div>
  )
}


export default function Home() {
  return (
    <main>
      <div>

        <Header />
      </div>
      <div>
        <Card/>
      </div>

    </main>
  )
}
