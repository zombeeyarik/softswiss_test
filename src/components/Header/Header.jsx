import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
