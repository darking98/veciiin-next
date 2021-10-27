//import Bubble from "./Bubble";
import image1 from "../../images/projects/image1.jpg";
import image2 from "../../images/projects/image2.jpg";
import image3 from "../../images/projects/image3.jpg";
import image4 from "../../images/projects/image4.jpg";
import image5 from "../../images/projects/image5.jpg";
import image6 from "../../images/projects/image6.jpg";
import image7 from "../../images/projects/image7.jpg";
//import { NavbarContext } from "../context/NavProvider";
import Image from "next/dist/client/image";

const Projects = () => {

  const imagesGroup1 = [image1, image2, image4, image6];
  const imagesGroup2 = [image3, image5, image7, image7];

  //const {useNavColor, colors, open} = useContext(NavbarContext)

  //useNavColor(colors.red)

  return (
    <div className="projects">
      <div className="projects-fixed">
        <span>Our Work</span>
        <div className="projects-fixed-container-title">
          <h3>A curated selection of projects.</h3>
          {/*<Bubble background="#CECF70">Services</Bubble>*/}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna
          urna, condimentum in velit a, pellentesque iaculis urna. Aliquam et
          urna erat. Donec luctus, dui ut scelerisque facilisis, quam purus.
        </p>
      </div>
      <div className="projects-gallery-container">
        <div className="projects-gallery group1">
          {imagesGroup1.map((element) => (
            <div className="projects-gallery-element">
              <Image src={element} alt="" />
              <div className="projects-gallery-info">
                <h4>Nombre Proyecto</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean urna urna, condimentum in velit a, pellentesque iaculis
                  urna. Aliquam et urna erat. Donec luctus, dui ut scelerisque
                  facilisis, quam purus.
                </p>
              </div>
            </div>
          ))}
          
        </div>
        <div className="projects-gallery">
        {imagesGroup2.map((element) => (
            <div className="projects-gallery-element">
              <Image src={element} alt="" />
              <div className="projects-gallery-info">
                <h4>Nombre Proyecto</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean urna urna, condimentum in velit a, pellentesque iaculis
                  urna. Aliquam et urna erat. Donec luctus, dui ut scelerisque
                  facilisis, quam purus.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
