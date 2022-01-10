import React, { Fragment } from "react";
import "../../styles/homeLog.scss";
import Carousel from 'react-bootstrap/Carousel'
import SearchBar from "../component/searchBar.jsx";


export const HomeLog = () => {
  return (
    <Fragment>
            <div className="container_searchBar"> 
        <SearchBar /> 
            </div>
      <div>  
          <img className="homeTop" src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1641555560/TheBeermmunity_logos_colores-05_c8id3v.png" />
      </div>
            <h1 className ="title__one">Últimas novedades en el sector cervecero</h1>
           
      <Carousel className ="carousel_container">    
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
              />
            <Carousel.Caption>
              <h3>El consumo de cerveza independiente al alza</h3>
              <p>En todos los ámbitos las modas son una peculiaridad innata. No es ningún secreto que hoy en día los consumidores de cerveza artesanal apuestan en general por el estilo IPA. Pero además, actualmente se han puesto de moda las Doble IPA, sobre todo en latas grandes y ediciones limitadas. Un gran número de estilos y una variedad cada vez más extensa de materias primas son apreciados por un público en aumento</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/close-up-of-bartender-pouring-draft-beer-in-glass-picture-id1093593288?b=1&k=20&m=1093593288&s=170667a&w=0&h=v60yqULEuqw2OSYLyvCYFPGV2Z1HitsA4Dh2Z0aToQY="
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Estilos de cerveza artesana y sus techos</h3>
              <p>Hoy en día, entre los estilos de cerveza artesana más demandados el rey indiscutible son las IPA y sus variantes. Una de las decisiones más importantes para un brewer reside en concretar qué estilos van a formar parte de su gama base de elaboración.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/happy-friends-at-a-rooftop-party-backlit-by-sunlight-picture-id900853584?b=1&k=20&m=900853584&s=170667a&w=0&h=Hjkq0UFnOV7LZiPW8l_ocptrlfnOz9D2zovyUzy_Hn0="
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="Third_title">Los comienzos de la internacionalización del mercado craft español</h3>
              <p className="Third_title">No escapa ya a nadie que la cerveza independiente ha venido para quedarse. Lo que es una verdadera lástima son la falta de datos que avalen esta afirmación. Una prueba cualitativa se refleja en el cambio de orientación de las cerveceras industriales españolas. </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1 className ="title__two">Disfruta de los mejores eventos</h1>
        <p>Mira todo lo que te espera en las próximas fechas si te animas a venir</p>
        
      <div className ="cards">
        
        <div className="cards__container">
            <div className ="date">
              <p className ="date__number">17</p> <p>ENE.</p>
            </div>
            <img src="https://media.istockphoto.com/photos/beer-bottles-picture-id157419167?b=1&k=20&m=157419167&s=170667a&w=0&h=RjL4GTY9zUYhR25gM8gWqmYTqXikUa7yskQoQkSu6yw=" />
            <div className="cards_title">
              <p className ="cards_info">17 enero 2022 - 23 enero 2022</p>
              <p className ="cards_info">Festival de la cerveza</p>
              <p className ="cards_place">Almería</p>
            </div>
        </div>

        <div className="cards__container">
            <div className ="date">
              <p className ="date__number">3</p> <p>FEB.</p>
            </div>
            <img src="https://media.istockphoto.com/photos/hand-of-bartender-pouring-a-large-lager-beer-in-tap-picture-id1175032059?b=1&k=20&m=1175032059&s=170667a&w=0&h=IUDqYcG-VpvNBb9VTT3eGW2x10eseoV3qb3gtHAr-uc=" />
            <div className="cards_title">
              <p className ="cards_info">3 febrero 2022 - 23 marzo 2022</p>
              <p className ="cards_info">Beer Runner</p>
              <p className ="cards_place">Jaen</p>
            </div>
        </div>

        <div className="cards__container">
            <div className ="date">
              <p className ="date__number">15</p> <p>ABR.</p>
            </div>
            <img src="https://media.istockphoto.com/photos/people-talking-and-toasting-in-a-pub-with-the-beers-picture-id1091469178?b=1&k=20&m=1091469178&s=170667a&w=0&h=OuQcjvOg_8eAnsXMLyDRD8CafkkYIJNL8nihkmlQ4Kk=" />
            <div className="cards_title">
              <p className ="cards_info">15 abril 2022 - 18 abril 2022</p>
              <p className ="cards_info">Mash Beer Fest</p>
              <p className ="cards_place">Lugo</p>
            </div>
        </div>

      </div>

    
    </Fragment>
  );
};
