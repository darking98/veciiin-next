import Head from "next/head";
import Image from "next/image";
import Bubble from "../components/Bubble";
export default function Home() {
  return (
    <div className="home">
      <div className="home-image-wrapper">
        <div className="home-image home-image-left"></div>
        <div className="home-image home-image-right"></div>
      </div>

      <section className="home-about-wrapper">
        <div className="home-about-header">
          <p>About the Studio</p>
          <Bubble background="#CECF70">Learn More</Bubble>
        </div>
        <h3>New ways of transforming your space.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna
          urna, condimentum in velit a, pellentesque iaculis urna. Aliquam et
          urna erat. Donec luctus, dui ut scelerisque facilisis, quam purus
          mollis elit, at tincidunt magna enim id quam. Nunc luctus pulvinar
          odio n dictum. Donec elementum vehicula ex ac varius.
        </p>
      </section>
    </div>
  );
}
