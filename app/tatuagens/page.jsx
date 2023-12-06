"use client";
import ItemTatuagem from "@/components/ItemTatuagem";
import { useEffect, useState } from "react";

export default function Tatuagem() {
  const [tatuagens, setTatuagens] = useState([]);

  useEffect(() => {
    async function getTatuagens() {
      const response = await fetch("http://localhost:3004/tatuagens");
      const dados = await response.json();
      setTatuagens(dados);
    }
    getTatuagens();
  }, []);

  const listaTatuagens = tatuagens.map((tatuagem) => (
    <ItemTatuagem key={tatuagem.id} tatuagem={tatuagem} />
  ));
  return (
		<div className="container">
			<div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4 mt-3">
				{listaTatuagens}
			</div>
		</div>
  );
}