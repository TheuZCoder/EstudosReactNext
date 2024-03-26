//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header"
import Card from "@/components/Card"


const nome='Matheus'
let canal='Noobzinho'


const produtos=[
  {
    produto:'mouse',
    valor:49.9,
    desconto:0,
    disponivel:true
  },
  {
    produto:'teclado',
    valor:79.9,
    desconto:0,
    disponivel:true
  },
  {
    produto:'monitor',
    valor:449.9,
    desconto:0,
    disponivel: true
  },
  {
    produto:'Cpu',
    valor:749.9,
    desconto:0,
    disponivel:true
  },
  {
    produto:'Cx.som',
    valor:249.9,
    desconto:0,
    disponivel: true
  },
  {
    produto:'Microfone',
    valor:65.9,
    desconto:0,
    disponivel:true
  },
]

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
      {
        produtos.map((e:any)=>{
          if (e.disponivel) {
            return(
              <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}/>
            )
          }     
        })
      }
    </div>
    
    </main>
  )
}
