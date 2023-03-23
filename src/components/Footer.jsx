import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => (
    <div className="footer__inner">
        <Container>
            <div className="socials">
                <a className="socials__item">
                    <img src='./img/socials/telegram.svg' />
                </a>
                <a className="socials__item">
                    <img src='./img/socials/pinterest.svg' />
                </a>
                <a className="socials__item">
                    <img src='./img/socials/twitter.svg' />
                </a>
            </div>
        </Container>
    </div>
);

export default Footer;