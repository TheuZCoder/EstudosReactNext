import Link from "next/link";


export default function Header() {
  return (
    <div className='flex flex-col justify-between items-center bg-gray-900 h-[130px]'>
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">Matheus Silva</div>
        <div className="subtitulo">Curso React</div>
      </div>

      <nav className="flex gap-5">
        <Link href={"/"}>
          Home
        </Link>
        <Link href={
          {
            pathname: "/produtos/produtos",
            query: {
              nome: 'Matheus',
              curso: 'React Next'
            }
          }
        }>
          Produtos
        </Link>
        <Link href={"/teste/teste"}>
          Teste
        </Link>
      </nav>


    </div>
  )
}