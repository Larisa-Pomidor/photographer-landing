import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='home'>
      <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
        <Carousel.Item>
          <img
            className="d-block"
            src="img/banner-1.jpg"
          />
          <Carousel.Caption>
            <div className="home__title">Сучасна Фотостудія</div>
            <div className="home__desc">
              Наша команда професійних фотографів допоможе вам залишити справжні почуття та емоції в кожному кадрі!
            </div>
            <Button variant="outline-light" className="btn home__button">Зв'язатися з нами</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="img/banner-2.jpg"
          />

          <Carousel.Caption>
            <div className="home__title">Атмосферні кадри</div>
            <div className="home__desc">
              Якісна зйомка, унікальний дизайн та креативний підхід – все це чекає на вас у нашій сучасній фотостудії!
            </div>
            <Button variant="outline-light" className="btn home__button">Зв'язатися з нами</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="img/banner-3.jpg"
          />

          <Carousel.Caption>
            <div className="home__title">Вестерн підхід</div>
            <div className="home__desc">
              Створимо неповторні атмосферні кінематографічні кадри у західному стилі разом із вами!
            </div>
            <Button variant="outline-light" className="btn home__button">Зв'язатися з нами</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;