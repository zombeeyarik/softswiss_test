import './Logo.scss';
import { Logo as LogoImage } from '../../assets/icons/Icons';

const Logo = () => {
    return (
        <a
            href="#"
            className="logo"
            title="To home page"
        >
            <LogoImage />
        </a>
    );
};

export default Logo;
