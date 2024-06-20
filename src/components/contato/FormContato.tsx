import { useForm, ValidationError } from "@formspree/react";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { useEffect } from "react";

function hasErrors(errors: any): boolean {
    return errors && Array.isArray(errors) && errors.length > 0;
}

function FormContato() {
    const [state, handleSubmit] = useForm("mbjnnzwe");

    useEffect(() => {
        if (state.succeeded) {
            ToastAlerta("Mensagem enviada com sucesso!", "sucesso");
        } else if (hasErrors(state.errors)) {
            ToastAlerta("Mensagem NÃO foi enviada, tente novamente.", "erro");
        }
    }, [state]);

    return (
        <main className="min-h-[65dvh] flex justify-center mt-4">
            <section className="w-[100%] flex max-md:flex-col items-center justify-evenly">
                <article className="w-[80%] md:w-[40%] max-md:mb-6">
                    <h3 className="text-[2rem] font-[montserratBold] drop-shadow-[0px_1px_var(--tw-shadow-color)] shadow-[#525252] text-center">
                        Me Contate
                    </h3>
                    <p className="mb-1 font-sans text-[1.1rem] text-center">
                        Está com aquele projeto incrível na cabeça, entrem em
                        contato comigo e vamos fazer ele acontecer. Preencha o
                        formulário e entrarei em contato o mais rápido possível!
                    </p>
                </article>
                <form
                    onSubmit={handleSubmit}
                    className="w-[80%] md:w-[35%] flex flex-col"
                >
                    <label className="font-sans font-semibold flex flex-col mb-2">
                        Nome:
                        <input
                            className="font-normal rounded-md mt-[1px] border-2 p-[4px]"
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Digite seu nome"
                            required
                        />
                    </label>
                    <label
                        htmlFor="email"
                        className="font-sans font-semibold flex flex-col mb-2"
                    >
                        Email:
                        <input
                            className="font-normal rounded-md mt-[1px] border-2 p-[4px]"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="exemplo@exemplo.com"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </label>
                    <label className="font-sans font-semibold flex flex-col mb-2 ">
                        Assunto:
                        <input
                            className="font-normal rounded-md mt-[1px] border-2 p-[4px]"
                            type="text"
                            name="assunto"
                            placeholder="Assunto"
                            required
                        />
                    </label>
                    <label className="font-sans font-semibold flex flex-col mb-2">
                        Mensagem:
                        <textarea
                            className="font-normal rounded-md mt-[2px] border-2 px-[4px]"
                            id="mensagem"
                            name="mensagem"
                            placeholder="Descreva o assunto"
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </label>
                    <button
                        className="my-2 py-2 px-8 font-sans text-[1.1rem] font-semibold bg-black text-white rounded-md hover:drop-shadow-[0px_0px_3px_var(--tw-shadow-color)] shadow-[#525252] hover:text-gray-300"
                        id="enviar"
                        type="submit"
                        disabled={state.submitting}
                    >
                        Enviar
                    </button>
                </form>
            </section>
        </main>
    );
}

export default FormContato;
