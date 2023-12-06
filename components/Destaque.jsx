"use client";
import ItemTatuagem from "@/components/ItemTatuagem";
import { useContext, useEffect, useState } from "react";
import Pesquisa from "@/components/Pesquisar";
import { ClienteContext } from "@/contexts/cliente";

export default function Destaque() {
  const { clienteNome } = useContext(ClienteContext);
  const [tatuagens, setTatuagens] = useState([]);

  useEffect(() => {
    async function getTatuagens() {
      const response = await fetch("http://localhost:3004/tatuagens");
      const dados = await response.json();
      setTatuagens(dados);
    }
    getTatuagens();
  }, []);

  function filtrarTatuagens(data) {
    async function getTatuagens() {
      const response = await fetch(
        "http://localhost:3004/tatuagens?tipo_like=" + data.pesq
      );
      const dados = await response.json();
      setTatuagens(dados);
    }
    getTatuagens();
  }
  const listaTatuagens = tatuagens.map((tatuagem) => (
    <ItemTatuagem key={tatuagem.id} tatuagem={tatuagem} />
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center ">Galeria de Tatuagens</h1>
      {clienteNome && (<Pesquisa filtrarTatuagens={filtrarTatuagens} />)}
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4 mt-3">
        {listaTatuagens}
      </div>
    </div>
  );
}
