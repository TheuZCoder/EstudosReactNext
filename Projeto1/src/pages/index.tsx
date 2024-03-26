//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header"
import Card from "@/components/Card"


const nome='Matheus'
let canal='Noobzinho'


export default function Home() {
  return (
    <main>
    <Header/>
    <div className="flex justify-center gap-3">
      <Card produto={'mouse'} valor={'R$49,90'}/>
      <Card produto={'teclado'} valor={'R$69,90'}/>
      <Card produto={'monitor'} valor={'R$459,90'}/>
    </div>
    
    </main>
  )
}
