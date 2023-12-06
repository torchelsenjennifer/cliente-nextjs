/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";
import Estrelas from "@/components/Estrelas";
import Link from "next/link";

export default function ItemProfissional(props) {
  const { clienteId } = useContext(ClienteContext);

  return (
    <div className="col">
      <div className="card">
        <img
          src={props.profissional.imagem}
          className="card-img-top"
          alt="profissional"
        />
        <div className="card-body">
          <h5 className="card-title">{props.profissional.titulo}</h5>
          <p className="card-text">{props.profissional.nome}</p>
          <p className="small">{props.profissional.especialidade.descricao}</p>
        </div>
        {clienteId && (
          <div className="ms-2 mb-2">
            <Estrelas
              soma={props.profissional.soma}
              num={props.profissional.num}
            />
            <div className="float-end me-2">
            <Link href={"/avaliacoes/" + props.profissional.id}>
              <i className="bi bi-chat-dots-fill text-primary fs-3 me-2" style={{  cursor: 'pointer' }} title="Ver Comentários"></i>
            </Link>
              <Link href={"/avaliar/" + props.profissional.id}>
                <i className="bi bi-patch-plus text-danger fs-3 me-2" style={{ cursor: 'pointer' }} title="Adicionar Comentários"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
