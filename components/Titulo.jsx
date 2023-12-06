"use client";
import Link from "next/link";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";

export default function Titulo() {
  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext);

  function logout() {
    if (confirm("Confirma saÃ­da do sistema?")) {
      mudaId(null);
      mudaNome("");
    }
  }

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-flex gap-2 p-2 w-100 float-end align-items-center">
        <div className="d-flex mx-auto align-items-center">
          <Link className="navbar-brand text-white" href="/">
            Home
          </Link>
          <Link className="navbar-brand text-white" href="/profissionais">
            Tatuadores
          </Link>
          <Link className="navbar-brand text-white" href="/">
            <img
              src="./logoCartaBranca.png"
              alt="Bootstrap"
              width="60"
              height="48"
              className="d-inline-block align-text-top float-start"
            />
          </Link>
          <Link className="navbar-brand text-white" href="/tatuagens">
            Galeria
          </Link>
          <Link className="navbar-brand text-white" href="/">
            Serviços
          </Link>
        </div>


        {clienteNome === "" ? (
          <Link
            href="/login"
            className="text-white d-flex align-items-center"
          >
            <i className="bi bi-person-fill-up text-white me-2 fs-4"></i>
            <span className="fs-4">Minha Conta</span>
          </Link>
        ) : (
          <div className="text-white d-flex align-items-center">
            <i className="bi bi-person-fill-down text-white me-2 fs-4"></i>
            <h4>
              {clienteNome}{" "}
              <span onClick={logout} style={{ cursor: "pointer" }}>
                (sair)
              </span>
            </h4>
          </div>
        )}
      </div>
    </nav>
  );
}
