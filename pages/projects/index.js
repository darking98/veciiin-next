import {useContext} from 'react'
import image1 from "../../images/projects/image1.jpg";
import image2 from "../../images/projects/image2.jpg";
import image3 from "../../images/projects/image3.jpg";
import image4 from "../../images/projects/image4.jpg";
import image5 from "../../images/projects/image5.jpg";
import image6 from "../../images/projects/image6.jpg";
import image7 from "../../images/projects/image7.jpg";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/dist/client/image";
import Bubble from "../../components/Bubble";
const Projects = () => {
  const imagesGroup1 = [image1, image2, image4, image6];
  const imagesGroup2 = [image3, image5, image7, image7];

  const {useNavColor, colors, open} = useContext(NavbarContext)

  useNavColor(colors.red)

  return (
    <div className="projects-container">
      <div className="projects">
        <div className="projects-fixed">
          <span>Our Work</span>
          <div className="projects-fixed-container-title">
            <h3>A curated selection of projects.</h3>
            {/*<Bubble background="#CECF70">Services</Bubble>*/}
          </div>
          <div className="bubble-container">
            <Bubble size="small" background="#CECF70">
              Services
            </Bubble>
          </div>
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
                    Aenean urna urna, condimentum in velit a, pellentesque
                    iaculis urna. Aliquam et urna erat. Donec luctus, dui ut
                    scelerisque facilisis, quam purus.
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
                    Aenean urna urna, condimentum in velit a, pellentesque
                    iaculis urna. Aliquam et urna erat. Donec luctus, dui ut
                    scelerisque facilisis, quam purus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="projects-asked-question">
        <span>Have a question?</span>
        <div className="projects-asked-question-title">
          <div>
            <h3>Frequently</h3>
            <Bubble size="small" background="#CECF70">
              Inquire
            </Bubble>
          </div>
          <h3>Asked Questions</h3>
        </div>
        <div className="projects-asked-question-grid">
          <div className="asked-question-grid-item">
            <div className="grid-item-title">
              <h3>This is the frequently asked q 01?</h3>
            </div>
            <div className="grid-item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit, leo non bibendum bibendum, erat ligula molestie magna,
                nec egestas orci massa ac elit. Nam pellentesque at diam finibus
                imperdiet. Aliquam gravida enim eleifend, elementum odio in,
                iaculis turpis.{" "}
              </p>
            </div>
          </div>
          <div className="asked-question-grid-item">
            <div className="grid-item-title">
              <h3>This is the frequently asked q 02?</h3>
            </div>
            <div className="grid-item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit, leo non bibendum bibendum, erat ligula molestie magna,
                nec egestas orci massa ac elit. Nam pellentesque at diam finibus
                imperdiet. Aliquam gravida enim eleifend, elementum odio in,
                iaculis turpis.{" "}
              </p>
            </div>
          </div>
          <div className="asked-question-grid-item">
            <div className="grid-item-title">
              <h3>This is the frequently asked q 03?</h3>
            </div>
            <div className="grid-item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit, leo non bibendum bibendum, erat ligula molestie magna,
                nec egestas orci massa ac elit. Nam pellentesque at diam finibus
                imperdiet. Aliquam gravida enim eleifend, elementum odio in,
                iaculis turpis.{" "}
              </p>
            </div>
          </div>
          <div className="asked-question-grid-item">
            <div className="grid-item-title">
              <h3>This is the frequently asked q 04?</h3>
            </div>
            <div className="grid-item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit, leo non bibendum bibendum, erat ligula molestie magna,
                nec egestas orci massa ac elit. Nam pellentesque at diam finibus
                imperdiet. Aliquam gravida enim eleifend, elementum odio in,
                iaculis turpis.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
