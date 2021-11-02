import about1 from "../../images/about/about1.png";
import about2 from "../../images/about/about2.jpg";
import vogue from "../../images/about/vogue.png";
import houseGarden from "../../images/about/houseGarden.png";
import Image from "next/image";
import Head from "next/head";
import Bubble from "../../components/Bubble";
import aboutImages from "../../images/about/about-images.png";
import aboutHorizontal from "../../images/about/fotoNaty.png";
import aboutFeatured from '../../images/about/Imagen-22.png'
import naty from "../../images/about/naty.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-profile">
          <div className="about-profile-col">
            <div className="col-header">
              <div className="col-header-div">
                <h3>Natalie</h3>
                <Bubble size="small" background="#CECF70">
                  Projects
                </Bubble>
              </div>
              <div className="col-header-div">
                <h3>Vecino</h3>
              </div>
            </div>
          </div>
          <div className="about-profile-col">
            <p>
              Comenzó su recorrido en el mundo del arte en el 2012 en Nueva York
              donde estudió Strategic Design and Management en Parsons, una
              carrera enfocada en la administración estratégica del diseño.
              Además, realizó cursos para aprender artes plásticas en Aschan,
              una academia de arte asiática.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="about-image-horizontal">
            <Image src={aboutHorizontal}/>

          </div>
          <div className="about-image-vertical">
            <Image src={naty} />
          </div>
        </div>
        <div className="about-profile second-about">
          <div className="about-profile-col second-profile-col">
            <p className="second-paragraph ">
              En 2015 Nueva York le abrió las puertas a su primer trabajo en
              diseño de interiores dentro de la Marks and Frantz cuyas socias
              son las creadoras de los sets de diseño de Sex and the city, el
              diablo viste a la moda, entre otras películas famosas. Gracias a
              esta experiencia, Natalie desarrolló un interés por el diseño de
              interiores y es por eso que en 2016 decidió mudarse nuevamente,
              pero esta vez a Miami para seguir aprendiendo. Allí, tuvo la
              oportunidad de trabajar en Art, Basel, Boconcept, y Beainteriors.
              Luego de adquirir una vasta experiencia, en 2018 decidió volver a
              Colombia donde tuvo la oportunidad de trabajar un tiempo con
              Verónica Mishaan en Bogotá
            </p>
          </div>
          <div className="about-profile-col third-profile-col">
            <p className="second-paragraph">
              Finalmente en 2019 Natalie decidió crear su propio estudio,
              Veciiin, con enfoque en el diseño de producto y mobiliario para
              proyectos residenciales y comerciales. El objetivo del estudio es
              proponer ideas frescas, contemporáneas para así plantear diseños
              funcionales que generen conversación. Actualmente, el estudio
              Veciiin ha completado muchos proyectos entre Barranquilla, Bogotá,
              Cartagena y varios proyectos residenciales en Miami.
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-featured" style={{ height: "100vh" }}>
        <div className="about-featured-header">
          <span>Studios Veciiin has been</span>
          <h3>Featured On</h3>
        </div>
        <div className="about-featured-companies">
        <div className="about-image-horizontal">
            <Image src={aboutImages}/>

          </div>
          <div className="about-image-vertical">
            <Image src={aboutFeatured} />
          </div>
        </div>
      </div>
      

      </div>
  );
};

export default About;
