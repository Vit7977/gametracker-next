"use client"
import { useState } from "react"
import Input from "../../components/input"
import SubmitButton from "../../components/submitButton"
import { createGameAction } from "./actions/createGame"
import AlertCard from "../../components/alertCard"
import GenerosContainer from "../../components/generosContainer"

export default function CreateGame() {

    const [alert, setAlert] = useState({
        message: "",
        error: false,
        visibility: false,
    });

    const handleSubmit = async(formData: FormData) => { 
        const response = await createGameAction(formData);

        if (!response.success){
            return setAlert({
                message: response.message,
                error: true,
                visibility: true,
            })
        }

        setAlert({
            message: response.message,
            error: false,
            visibility: true,
        });
    }

    const [img, setImg] = useState<string>("")

    return (
        <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center gap-8 p-6">

            <AlertCard
                message={alert.message}
                error={alert.error}
                visibility={alert.visibility}
            />

            <div className="bg-white p-4 rounded-lg min-w-98 shadow-md shadow-indigo-400 border-2 border-indigo-400">

                <h1 className="text-center text-2xl font-medium pb-3">
                    ADICIONAR JOGO
                </h1>

                <form action={handleSubmit} className="flex flex-col gap-4">

                    <Input
                        label="Titulo"
                        type="text"
                        name="titulo"
                        required
                    />

                    <Input
                        label="Capa"
                        type="text"
                        name="capa"
                        placeholder="URL da imagem..."
                        required
                        onChange={(e) => setImg(e.target.value)}
                    />

                    <Input
                        label="Descrição"
                        type="text"
                        name="descricao"
                    />

                    <Input
                        label="Data de Lançamento"
                        type="date"
                        name="data_lancamento"
                        required
                    />

                    <Input
                        label="Generos"
                        type="text"
                        name="genero"
                        placeholder="Separe cada genero com ', '"
                        required
                    />
                    <GenerosContainer generos={"Ação e Aventura, Tiro"}/>

                    <SubmitButton text="Adicionar" />
                </form>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md shadow-indigo-400 border-2 border-indigo-400 w-72">

                <h2 className="text-center text-xl font-medium mb-3">
                    Preview da Capa
                </h2>

                <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">

                    {img ? (
                        <img
                            src={img}
                            alt="Preview da capa"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-gray-400 text-sm">
                            A imagem aparecerá aqui
                        </span>
                    )}

                </div>
            </div>
        </div>
    )
}