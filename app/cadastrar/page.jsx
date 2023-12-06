"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Cadastrar = () => {
  const { register, handleSubmit, reset } = useForm();

  async function cadastrarCliente(data) {
	const { nome, email, senha } = data;

	if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
	  alert("Por Favor, Preencha Todos os Campos!");
	} else {
	  const clientes = await fetch("http://localhost:3004/clientes", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  ...data,
		  nome: String(nome),
		  email: String(email),
		  senha: String(senha),
		}),
	  });

	  if (clientes.status === 201) {
		alert("Cadastro de Cliente realizado com sucesso!");
		reset();
	  } else {
		alert("Erro ao Cadastrar Cliente!");
	  }
	}
  }

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Criar Conta</h2>
          <form onSubmit={handleSubmit(cadastrarCliente)}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Seu Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                {...register("nome")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                {...register("senha")}
              />
            </div>
            <button
              type="submit"
              className="btn bg-black w-100 py-2 text-white mb-5"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;
