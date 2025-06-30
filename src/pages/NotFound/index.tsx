import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a2342] to-[#19376d] text-white font-sans">
            <span className="text-6xl font-bold text-[#b0c4de] rounded-full bg-[#0a2342] size-35 mb-2 flex items-center justify-center shadow-lg">
                404
            </span>
            <h1 className="text-4xl font-bold m-0">Página não encontrada</h1>
            <p className="text-lg mt-4 text-[#b0c4de]">
                Desculpe, não conseguimos encontrar o que você procura.
            </p>
            <Link
                to="/oee"
                className="mt-8 px-8 py-3 bg-[#0a2342] text-white rounded-lg no-underline font-medium text-base shadow-md transition-colors duration-200 hover:bg-[#19376d]"
            >
                Voltar para o início
            </Link>
        </div>
    )
}
