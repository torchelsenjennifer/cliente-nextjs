"use client";
import ItemProfissional from "@/components/ItemProfissional";
import { useEffect, useState } from "react";

export default function Home() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    async function getProfissionais() {
      const response = await fetch("http://localhost:3004/profissionais");
      const dados = await response.json();
      setProfissionais(dados);
    }
    getProfissionais();
  }, []);

  const listaProfissionais = profissionais.map((profissional) => (
    <ItemProfissional key={profissional.id} profissional={profissional} />
  ));
  return (
		<div className="container">
			<div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4 mt-3">
				{listaProfissionais}
			</div>
		</div>
  );
}