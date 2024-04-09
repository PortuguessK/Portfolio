import { Arrow } from "../components/arrow";
import { GmailSvg } from "../components/gmail";
import { IgSvg } from "../components/ig";
import { LinkedinSvg } from "../components/linkedin";
import "../css/MainInformation.css";

export function MainInformation() {
  return (
    <section className="MainInformation-Container">
      <div className="MainInformation">
      <div className="Cards">
        <div className="MyCard">
          <div className="MyCardTitleContainer">
            <h1 className="MyName">Kevin Portuguez</h1>
            <h1 className="MyCarreer">Desarrolador FrontEnd</h1>
          </div>
          <div className="SocialMediaContainer">
            <IgSvg />
            <LinkedinSvg />
            <GmailSvg />
          </div>
        </div>
        <div className="WAYCard">
          <div className="WAYCardTitleContainer">
            <h1 className="WAYCardTitle">¿Qui<b className="primary-color fw-500">é</b>n soy?</h1>
          </div>
          <div className="WAYCardParagraphContainer">
            <p className="WAYCardParagraph">
              Soy un chico de 20 años que su hobby principal es programar y los
              videojuegos.
            </p>
            <p className="WAYCardParagraph">
              Empecé desde los 12 años a interesarme por el mundo informático y
              actualmente el interés sigue creciendo.
            </p>
            <p className="WAYCardParagraph">
              En 2019 comencé en la programación, ya que podría adaptarse a mi
              creatividad e inteligencia y termino siendo uno de mis hobbies.
            </p>
          </div>
        </div>
      </div>
      <div className="ArrowContainer">
        <Arrow />
      </div>
      </div>
    </section>
  );
}
