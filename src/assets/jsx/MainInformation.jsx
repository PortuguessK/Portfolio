import { Arrow } from "../components/arrow";
import { GmailSvg } from "../components/gmail";
import { IgSvg } from "../components/ig";
import { LinkedinSvg } from "../components/linkedin";
import { ChangeModeShared } from "./ModeContext";
import "../css/MainInformation.css";

export function MainInformation() {
  const {isDark} = ChangeModeShared()
  return (
    <section className={isDark? "MainInformationContainer bgdm cdm" : "MainInformationContainer bglm clm"}>
      <div className={isDark?"MainInformation bcprimary":"MainInformation bcprimaryalt"}>
        <div className="Cards">
          <div className="MyCard">
            <div className={isDark? "MyCardTitleContainer bcprimary" : "MyCardTitleContainer bcprimaryalt"}>
              <h1 className="MyName">Kevin Portuguez</h1>
              <h1 className={isDark? "MyCarreer cdmalt fw-500" : "MyCarreer clm fw-500"} >
              Desarrolador FrontEnd</h1>
            </div>
            <div className="SocialMediaContainer">
              <IgSvg />
              <LinkedinSvg />
              <GmailSvg />
            </div>
          </div>
          <div className={isDark? "WAYCard bcprimary" : "WAYCard bcprimaryalt"}>
            <div className="WAYCardTitleContainer">
              <h1 className="WAYCardTitle">
                ¿Qui<b className={isDark? "cprimary fw-700 ":"cprimaryalt fw-700"}>é</b>n soy?
              </h1>
            </div>
            <div className="WAYCardParagraphContainer">
              <p className={isDark? "WAYCardParagraph cdmalt" : "WAYCardParagraph clmalt" }>
                Soy un chico de 20 años que su hobby principal es programar y
                los videojuegos.
              </p>
              <p className={isDark? "WAYCardParagraph cdmalt" : "WAYCardParagraph clmalt" }>
                Empecé desde los 12 años a interesarme por el mundo informático
                y actualmente el interés sigue creciendo.
              </p>
              <p className={isDark? "WAYCardParagraph cdmalt" : "WAYCardParagraph clmalt" }>
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
