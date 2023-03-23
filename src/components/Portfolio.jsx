import React from 'react';
import Container from 'react-bootstrap/Container';

const Portfolio = () => (
  <div className="portfolio">
    <div className="portfolio__outer">
      <Container>
        <div className="vertical-lines-wrapper">
          <div className="vertical-lines">
            <div className="vertical-lines-wrapper">
              <div className="vertical-effect"></div>
              <div className="vertical-effect"></div>
              <div className="vertical-effect"></div></div>
          </div>
          <div className="vertical-effect"></div>
          <div className="vertical-effect"></div>
          <div className="vertical-effect"></div>
        </div>
        <div className="portfolio__gallery">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="portfolio__item portfolio__item-1"></div>
              <div className="portfolio__item portfolio__item-2 portfolio__item_large"></div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="portfolio__item portfolio__item-3 portfolio__item_large"></div>
              <div className="portfolio__item portfolio__item-4"></div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="portfolio__item portfolio__item-5"></div>
              <div className="portfolio__item portfolio__item-6 portfolio__item_large"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default Portfolio;