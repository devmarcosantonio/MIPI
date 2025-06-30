import { Target } from 'lucide-react';

export default function Oee() {

    const dadosKPI1 = [
        { nome: "Início de turno incorreto", valor: 247 },
        { nome: "Fim de turno incorreto", valor: 144 },
        { nome: "Intervalo incorreto", valor: 166 },
        { nome: "Ociosidade alta", valor: 44 },
        { nome: "Deslocamento baixo", valor: 152 },
        { nome: "Deslocamento alto", valor: 1136 },
        { nome: "Execução baixa", valor: 99 },
        { nome: "Execução alta", valor: 184 }
    ]

    const dadosKPI2 = [
        { nome: "Meta dinâmica UPS", valor: 50.5 },
        { nome: "Média realizada UPS", valor: 29.16 },
        { nome: "Meta HH", valor: 9.0 },
        { nome: "Média realizada HH", valor: 9.47 }
    ]



    return (
        <div>
            <section className="grid xl:grid-cols-[4fr_2fr] gap-5">
                <div >
                    <ul className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-5 h-full w-full">
                        {dadosKPI1.map((dado, index) => (
                            <li
                                key={index}
                                className="flex flex-col justify-between bg-[#E6E6E6] p-3 min-h-25 w-full rounded-2xl"
                            >
                                <span className="text-gray-700 text-[14px] font">{dado.nome}</span>
                                <span className="text-[#2F2E79] font-semibold text-2xl">{dado.valor}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className='grid grid-cols-2 p-5 bg-[#003A62] rounded-2xl'>
                        {dadosKPI2.map((dado, index) => (
                            <li
                                key={index}
                                className="flex flex-col justify-between p-3 min-h-25 w-full rounded-2xl"
                            >
                                <span className="flex items-center gap-2">
                                    <span className='bg-white size-8 rounded-full flex items-center justify-center'>
                                        <Target className="text-[#2F2E79]" />
                                    </span>
                                    
                                    <span className="text-white text-[14px] font-semibold">{dado.nome}</span>
                                </span>
                                <span className="text-[#6D6EA8] font-bold text-2xl">{dado.valor}</span>
                            </li>
                        ))}
                    </ul>

                </div>

            </section>
        </div>
    )
}
