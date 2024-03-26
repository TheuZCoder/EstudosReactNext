interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    funcao:any
}


export default function Card(props: CardProps) {
    return(                                 //aqui temos uma função de renderização que necessita de uma segunda opção para funcionar
        <div className={`flex justify-center flex-col border-4 ${props.desconto>0?'border-red-700':'border-blue-700'}rounded-sm p-1`}>
            <div>Produto:{props.produto}</div>
            <div>Valor: R${props.valor}</div>

            {props.desconto>0&&( //aqui vemos uma função de renderização condicional que só aparece caso o desconto for maior que 0 e não tem uma segunda função
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Preço venda: R${ props.funcao (props.valor,props.desconto)}</div> 
                </div>
            )}
        </div>// sempre utilizar props porque é oq esta sendo chamado na função CARD(props: CardProps)
    )
}