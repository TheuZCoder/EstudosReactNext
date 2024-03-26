//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header"
import Card from "@/components/Card"


const nome='Matheus'
let canal='Noobzinho'

function calcDesc(v:number,d:number) {
  return v-d
}

function calcDesc2(v:number,d:number) {
  return v-(d/2)
}

export default function Home() {
  return (
    <main>
    <Header/>
    <div className="flex justify-center gap-3">
      <Card produto={'mouse'} valor={49.90} desconto={10} funcao={calcDesc}/>
      <Card produto={'teclado'} valor={69.90} desconto={2} funcao={calcDesc}/>
      <Card produto={'monitor'} valor={459.90} desconto={5} funcao={calcDesc2}/>
      <Card produto={'Cpu'} valor={759.90} desconto={50} funcao={calcDesc2}/>
    </div>
    
    </main>
  )
}
