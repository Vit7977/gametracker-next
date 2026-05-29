import GeneroCard from "../generoCard";

export default function GenerosContainer({ generos }: { generos: string }) {
    const generosArray = generos
    .split(",")
    .map((item) => item.trim());

    return (
        <div className="flex gap-2 flex-wrap">
            
            {generosArray.map((item, index) => (
                <div key={item} className="flex items-center gap-1">

                    <GeneroCard genero={item} />

                    {index < generos.length - 1 && (
                        <span className="text-indigo-700 font-bold"></span>
                    )}

                </div>
            ))}

        </div>
    );
}