"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import "./login.css";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";
import { useRouter } from "next/navigation";

export default function Login() {
  const { mudaId, mudaNome } = useContext(ClienteContext);
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  async function verificaLogin(data) {
    const filtro = `?email=${data.email}&senha=${data.senha}`;
    const response = await fetch("http://localhost:3004/clientes" + filtro);
    const dados = await response.json();

    if (dados.length == 0) {
      alert("Erro... E-mail ou senha inválido");
    } else {
      mudaId(dados[0].id);
      mudaNome(dados[0].nome);
      router.push("/");
    }
  }

  return (
    <main className="form-signin w-100 m-auto mt-5">
      <form onSubmit={handleSubmit(verificaLogin)}>
        <h1 className="my-3 fw-normal">Dados do Cliente: Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail de Acesso"
            required
            {...register("email")}
          />
          <label htmlFor="email">E-mail de Acesso:</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Senha"
            required
            {...register("senha")}
          />
          <label htmlFor="senha">Senha de Acesso:</label>
        </div>

        <div className="text-end my-3">
          <Link className="text-black" href="/cadastrar">
            Novo? Cadastre-se
          </Link>
        </div>

        <button className="btn bg-black w-100 py-2 text-white" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}
