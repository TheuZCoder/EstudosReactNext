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
      <Card produto={'mouse'} valor={49.90} desconto={10}/>
      <Card produto={'teclado'} valor={69.90} desconto={2}/>
      <Card produto={'monitor'} valor={459.90} desconto={5}/>
      <Card produto={'Cpu'} valor={759.90} desconto={50}/>
    </div>
    
    </main>
  )
}
