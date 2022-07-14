import glass1 from '../images/products/glass/1.png'
import glass2 from '../images/products/glass/2.png'
import glass3 from '../images/products/glass/3.png'
import glassDetail1 from '../images/products/glass/detail/1.png';
import glassDetail2 from '../images/products/glass/detail/2.jpg';
import glassDetail3 from '../images/products/glass/detail/3.jpg';
import books1 from '../images/products/books/1.png'
import books2 from '../images/products/books/2.png'
import books3 from '../images/products/books/3.png'
import books4 from '../images/products/books/4.png'
import books5 from '../images/products/books/5.png'
import books6 from '../images/products/books/6.png'
import sculpture1 from '../images/products/sculpture/1.png'
import sculpture2 from '../images/products/sculpture/2.png'
import sculpture3 from '../images/products/sculpture/3.png'
import sculpture4 from '../images/products/sculpture/4.png'
import sculptureDetail1 from '../images/products/sculpture/detail/1.jpg'
import sculptureDetail2 from '../images/products/sculpture/detail/2.jpg'
import sculptureDetail3 from '../images/products/sculpture/detail/3.jpg'
import sculptureDetail4 from '../images/products/sculpture/detail/4.jpg'
import services1 from '../images/products/sevices/1.jpg'
import services2 from '../images/products/sevices/2.jpg'
import services3 from '../images/products/sevices/3.jpg'
import services4 from '../images/products/sevices/4.jpg'
import services5 from '../images/products/sevices/5.jpg'
import services6 from '../images/products/sevices/6.jpg'

const products = {
  glass: [
    {
      id: 1,
      title: "Beso Glass",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:glass1,
      detailImage:glassDetail1,
    },
    {
      id: 2,
      title: "Beso Glass",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:glass2,
      detailImage:glassDetail2,
    },
    {
      id: 3,
      title: "Beso Carafe & Glass",
      price: 150,
      currency: "U$D",
      description: "Little description",
      image:glass3,
      detailImage:glassDetail3,
    },
  ],
  books: [
    {
      id: 4,
      title: "Miami Beach",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books1,
      detailImage:books1
    },
    {
      id: 5,
      title: "Aspen Style",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books2,
      detailImage:books2
    },
    {
      id: 6,
      title: "Art House",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books3,
      detailImage:books3
    },
    {
      id: 7,
      title: "Paris Chic",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books4,
      detailImage:books4
    },
    {
      id: 8,
      title: "Turquoise Coast",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books5,
      detailImage:books5
    },
    {
      id: 9,
      title: "Amalfi Coast",
      price: 68,
      currency: "U$D",
      description: "Little description",
      image:books6,
      detailImage:books6
    },
  ],
  sculpture: [
    {
      id: 10,
      title: "Marble Backgammon",
      price: 350,
      currency: "U$D",
      description: "Little description",
      image:sculpture1,
      detailImage:sculptureDetail1
    },
    {
      id: 11,
      title: "Marble Console",
      price: 1000,
      currency: "U$D",
      description: "Little description",
      image:sculpture2,
      detailImage:sculptureDetail2
    },
    {
      id: 12,
      title: "Unconventional Display Scupulture",
      price: 700,
      currency: "U$D",
      description: "Little description",
      image:sculpture3,
      detailImage:sculptureDetail3
    },
    {
      id: 13,
      title: "Carved Minor",
      price: 950,
      currency: "U$D",
      description: "Little description",
      image:sculpture4,
      detailImage:sculptureDetail4
    },
  ],
  services :[
    {
      id:14, 
      title:'Styling Tips',
      price:40,
      currency:"U$D",
      description:`
· AVAILABLE ONLINE ONLY\n
· Advice on how to decorate micro spaces and surfaces such as tables, bookshelves, and walls.\n
·  20 Minute Call.\n
·  1 Moodboard + 2 Rounds of revision.\n
·  Basic Design Consultation on (choose one):\n
    •      Choice of wallpaper\n
    •      Choice of art\n
    •      Choice of lighting\n
    •      Choice of paint color\n
    •      Choice of art and mirrors\n
    •      Choice of decor and books\n
    •      Choice of pillows and throws\n
    •      Choice of rugs\n
      `,
      image:services1,
      detailImage:services1,
      generalInformation:'Decorate spaces and surfaces such as tables, bookshelves & more'
    },
    {
      id:15, 
      title:'Deco Essentials',
      price:150,
      currency:"U$D",
      description:`
· AVAILABLE ONLINE ONLY\n
· A personalized study on the current state of the room you are looking to transform.\n
· Includes:\n
    •      1 hour video call with design suggestions and answer any questions you may have.\n
    •      Establishing a style and color palette.\n
    •      Mood board of the space.\n
    •      Shopping List.\n
      `,
      image:services2,
      detailImage:services2,
      generalInformation:'Design consultation of the room you are looking to transform'
    },
    {
      id:16, 
      title:'Furniture Design',
      price:40,
      currency:"U$D",
      description:'Little description',
      image:services3,
      detailImage:services3
    },
    {
      id:17, 
      title:'The Veciiin Design',
      price:450,
      currency:"U$D",
      description:`
· Complete styling of 1 room.\n
· Includes:\n
    •      A 1-hour meeting to learn about your needs and the current state of the room you want to design or redecorate.\n
    •      2 style proposals, color palette, and choice of furniture.\n
    •      2 different room plans to help you decide on the best location for your furniture.\n
    •      A 1-hour conversation on the delivered 3D render of the final design of your room.\n
    •      10% Discount on Veciiin furniture.\n
      `,
      image:services4,
      detailImage:services4,
      generalInformation:'Complete styling of one space in 3D rendering'
    },
    {
      id:18, 
      title:'The Veciiin Design Plus',
      price:40,
      currency:"U$D",
      description:`
·  PERSONALIZED CONSULTATION: AVAILABLE ONLINE AND IN PERSON.\n
·  Experience a stress-free tailored interior design service or makeover of one or more spaces.\n
·  This service includes design direction and project management of more than one\n
   space.\n
·  Contact us to learn more about our face-to-face personalized consultations,\n
   installation services, 3D renderings, furniture design, quotes, shopping lists, interior\n
   architecture, and renovations.\n
   <b>·  Quotes are subject to the project of choice.</b>
      `,
      image:services5,
      detailImage:services5,
      generalInformation:'Experience a stress-free full interior design or makeover of one or more spaces'
    },
    {
      id:19, 
      title:'Art Consultation',
      price:40,
      currency:"U$D",
      description:'Little description',
      image:services6,
      detailImage:services6
    }
  ]
};

export default products;
