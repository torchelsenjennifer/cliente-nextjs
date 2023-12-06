"use client";
import { useForm } from "react-hook-form";

export default function Pesquisa(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="row row-cols-lg-auto g-3 align-items-center mt-3"
      onSubmit={handleSubmit(props.filtrarTatuagens)}
      onReset={props.mostrarTodos}
    >
      <div className="col-6">
        <input
		style={{ width: '1185px' }}
          className="form-control mr-sm-2 col-12"
          type="search"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          {...register("pesq")}
        />
      </div>
      <div className="col-6">
        <button className="btn bg-black text-white" type="submit">
          Pesquisar
        </button>
      </div>
    </form>
  );
}
