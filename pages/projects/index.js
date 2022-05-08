import { useContext } from "react";
import Link from "next/link";
import image1 from "../../images/projects/new/image1.png";
import image2 from "../../images/projects/new/image2.png";
import image3 from "../../images/projects/new/image3.png";
import image4 from "../../images/projects/new/image4.png";
import image5 from "../../images/projects/new/image5.png";
import image6 from "../../images/projects/new/image6.png";
import image7 from "../../images/projects/new/image7.png";
import image8 from "../../images/projects/new/image8.png";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/dist/client/image";
import Bubble from "../../components/Bubble";
import Head from "next/head";

const Projects = () => {
  //const imagesGroup1 = [image1, image3, image5, image7];
  //const imagesGroup2 = [image2, image4, image6, image8];

  const imagesGroup1 = [
    {
      image: image1,
      title: "Chateau",
    },
    {
      image: image3,
      title: "Ferreti",
    },
    {
      image: image5,
      title: "Hayde",
    },
    {
      image: image7,
      title: "Mirage 57",
    },
  ];
  const imagesGroup2 = [
    {
      image: image2,
      title: "Di Mirage",
    },
    {
      image: image4,
      title: "Gallery",
    },
    {
      image: image6,
      title: "Lenox",
    },
    {
      image: image8,
      title: "OM",
    },
  ];
  const { useNavColor, colors, open } = useContext(NavbarContext);

  useNavColor(colors.red);

  return (
    <>
      <Head>
        <title>Veciiin Projects</title>
      </Head>
      <div className="projects">
        <div className="projects-fixed">
          <div className="projects-fixed-container-title">
            <span className="letter-spacing">Our Work</span>
            <h3>{`A curated selection\nof our projects`}</h3>
          </div>
        </div>

        <div className="projects-gallery-container">
          <div className="projects-gallery group1">
            {imagesGroup1.map((element) => (
              <div className="projects-gallery-element">
                <Image src={element.image} alt="" />
                <div className="projects-gallery-info">
                  <h4>{element.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-gallery group2">
            {imagesGroup2.map((element) => (
              <div className="projects-gallery-element">
                <Image src={element.image} alt="" />
                <div className="projects-gallery-info">
                  <h4>{element.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sticky-stop">
          <Link href="/services">
            <a>
              <div className="bubble-container">
                <Bubble background="#CECF70">Services</Bubble>
              </div>
            </a>
          </Link>
        </div>
      </div>

      {/*
      <div className="projects-asked-question">
        <span className="letter-spacing">Have a question?</span>
        <div className="projects-asked-question-title">
          <div>
            <div className="header-container">
              <h3>Frequently</h3>
            </div>
            <div className="hide-responsive">
              <Bubble background="#CECF70">Inquire</Bubble>
            </div>
          </div>
          <h3>Asked Questions</h3>
          <div className="show-responsive">
            <Bubble background="#CECF70">Inquire</Bubble>
          </div>
        </div>
        <div className="projects-asked-question-grid">
          <div className="asked-question-grid-item">
            <div className="grid-item-title">
              <h3>What design services do you offer?</h3>
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
              <h3>How much do you charge?</h3>
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
              <h3>How long does the design process take?</h3>
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
              <h3>Can I ask for changes on the proposal?</h3>
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
              <h3>Hacen asesoría en decoración?</h3>
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
              <h3>Tienen consultoría en arte?</h3>
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
            </div>*/}
    </>
  );
};

export default Projects;
