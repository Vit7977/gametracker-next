export default function GeneroCard({genero}: {genero:string}) {
    return (
        <div className="bg-indigo-400 p-2 pl-3 rounded-full border-indigo-500">
            <span className="font-medium text-indigo-800">{genero}</span>
        </div>
    )
}