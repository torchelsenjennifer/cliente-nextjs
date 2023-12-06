'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Estrelas from '@/components/Estrelas'
import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"

export default function Avaliar() {
  const params = useParams()
  const [profissional, setProfissional] = useState({})
  const { clienteId } = useContext(ClienteContext)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { estrelas: 3 }
  })

  useEffect(() => {
    async function getProfissional() {
      const response = await fetch("http://localhost:3004/profissionais/" + params.id)
      const dado = await response.json()
      //      console.log(dado)
      setProfissional({
        id: dado.id,
        nome: dado.nome,
        CPF: dado.CPF,
        contato: dado.contato,
        dataNasc: dado.dataNasc,
        especialidade: dado.especialidade,
        imagem: dado.imagem,
        soma: dado.soma,
        num: dado.num
      })
    }
    getProfissional()
    //    console.log(filme)
  }, [])

  async function enviaComentario(data) {
    const avaliacao = { ...data, cliente_id: clienteId, profissional_id: profissional.id, data: new Date() }

    const avalia = await fetch("http://localhost:3004/avaliacoes",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(avaliacao)
      },
    )

    const altera = { soma: Number(profissional.soma) + Number(data.estrelas), num: Number(profissional.num) + 1 }
    const atualiza_estrelas = await fetch("http://localhost:3004/avalia_profissional/" + profissional.id,
      {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(altera)
      },
    )

    if (avalia.status == 201 && atualiza_estrelas.status == 200) {
      alert("Ok! Avaliação cadastrada com sucesso")
      reset()
    } else {
      console.log(avalia.status);
      console.log(atualiza_estrelas.status);
      alert("Erro no cadastro da avaliação...")
    }
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <img src={profissional.imagem} alt="Profissional" width={300} className="mx-auto d-block mt-1" />
            <div className="card-body">
              <h5 className="card-title">
                {profissional.nome}
              </h5>
              <p className="card-text">
                {profissional.especialidade}
              </p>
              <p className="card-text small">
                Contato: {profissional.contato}
              </p>
              <p className="card-text small">
                {
                  profissional.dataNasc}
              </p>
              <Estrelas soma={profissional.soma} num={profissional.num} />
              <span className="ms-2">{profissional.num} avaliações</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <form className="card-body" onSubmit={handleSubmit(enviaComentario)}>
              <h3 className="card-title">Cadastre o seu comentário sobre este profissional</h3>
              <hr />
              <div className="my-4">
                <label for="comentario" className="form-label fs-5">Seu Comentário:</label>
                <textarea className="form-control form-control-lg" id="comentario" rows="3"
                  {...register("comentario")}></textarea>
              </div>
              <div className="mb-3">
                <label for="estrelas" className="form-label fs-5">Sua Avaliação (Estrelas)</label>
                <select className="form-select form-select-lg mb-3" {...register("estrelas")}>
                  <option value="1">1 Estrela</option>
                  <option value="2">2 Estrelas</option>
                  <option value="3">3 Estrelas</option>
                  <option value="4">4 Estrelas</option>
                  <option value="5">5 Estrelas</option>
                </select>
              </div>
              <div className="d-grid gap-2 col-6 ms-auto">
                <input type="submit" className="btn btn-primary btn-lg mt-3" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}