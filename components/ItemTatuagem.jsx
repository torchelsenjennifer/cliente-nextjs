
export default function ItemTatuagem(props) {

  return (
    <div className="col">
      <div className="card">
        <img
          src={props.tatuagem.imagem}
          className="card-img-top"
          alt="tatuagem"
        />
        <div className="card-body">
          <h5 className="card-title">{props.tatuagem.nome}</h5>
          <p className="card-text">{props.tatuagem.localizacao}</p>
          <p className="small">{props.tatuagem.preco}</p>
		  <p className="small">{props.tatuagem.tipo}</p>
        </div>
      </div>
    </div>
  );
}