//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

const nome='Matheus'
let canal='Noobzinho'

function Topo(){
  return(
    <div className='flex justify-between items-center bg-gray-900 h-[100px]'>
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
      <div className="text-3xl">{canal}</div>
      <div className="subtitulo">Curso React</div>
      </div>
      <div>{nome}</div>
    </div>
  )

}



export default function Home() {
  return (
    <main>
     {Topo()}
    </main>
  )
}
