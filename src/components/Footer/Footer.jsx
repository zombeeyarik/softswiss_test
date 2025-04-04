import './Footer.scss';
import rocketIcon from '../../assets/rocket-icon.webp';
import rocketIcon2x from '../../assets/rocket-icon@2x.webp';

const Footer = () => {
    return (
        <footer className="footer">
            <img
                className="footer__logo"
                src={rocketIcon}
                srcSet={`${rocketIcon} 1x, ${rocketIcon2x} 2x`}
                alt="Rocket?"
                loading="lazy"
            />
            <p className="footer__text">Exciting space adventure!</p>
        </footer>
    );
};

export default Footer;
