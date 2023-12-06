export default function Estrelas({ soma, num }) {
  const media = parseFloat(soma / num);

  const estrelas = [];

  for (let i = 1; i <= media; i++) {
    estrelas.push(<i className="bi bi-star-fill text-warning"></i>);
  }
  if (media % 1 > 0.25 && media % 1 <= 0.75) {
    estrelas.push(<i className="bi bi-star-half text-warning"></i>);
  } else if (media % 1 > 0.75) {
    estrelas.push(<i className="bi bi-star-fill text-warning"></i>);
  }

  return <div className="float-start">{estrelas}</div>;
}
