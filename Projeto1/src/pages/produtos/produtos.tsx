
import Header from "@/components/Header"
import Card from "@/components/Card"
import { useRouter } from "next/router"


const produtos = [
    {
        id:1,
        produto: 'mouse',
        valor: 49.9,
        desconto: 0,
        disponivel: true
    },
    {
        id:2,
        produto: 'teclado',
        valor: 79.9,
        desconto: 0,
        disponivel: true
    },
    {
        id:3,
        produto: 'monitor',
        valor: 449.9,
        desconto: 0,
        disponivel: true
    },
    {
        id:4,
        produto: 'Cpu',
        valor: 749.9,
        desconto: 0,
        disponivel: true
    },
    {
        id:5,
        produto: 'Cx.som',
        valor: 249.9,
        desconto: 0,
        disponivel: true
    },
    {
        id:6,
        produto: 'Microfone',
        valor: 65.9,
        desconto: 0,
        disponivel: true
    },
]

function calcDesc(v: number, d: number) {
    return v - d
}

function calcDesc2(v: number, d: number) {
    return v - (d / 2)
}

export default function produtosPagina() {
    const router = useRouter()
    const {nome,curso} = router.query
    return (
        <div>
            <Header />
            <div className="flex justify-center gap-3">
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}