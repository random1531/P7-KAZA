import './logementtitleandlocalisation.css';

function LogementTitleAndLocalisation({ logement }) {
  return (
    <div className="logement-title-and-localisation">
      <h2 className='logement_title'>{logement.title}</h2>
      <p className='logement_localisation'>{logement.location}</p>
    </div>
  );
}
export default LogementTitleAndLocalisation;