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
      title: "Beso Carafe & Glass",
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
};

export default products;
