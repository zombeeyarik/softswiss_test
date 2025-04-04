import { useState, useEffect } from 'react';
import { Cart } from '../../assets/icons/Icons';
import './Navigation.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        if (isOpen && isMobile) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, isMobile]);

    return (
        <>
            {isMobile && (
                <button
                    className="nav-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="main-menu"
                >
                    <div className="nav-toggle__line"></div>
                </button>
            )}
            <nav
                id="nav"
                className={`nav ${isOpen && isMobile ? 'nav--open' : ''}`}
                aria-label="Main navigation"
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <a
                            href="/"
                            className="nav__link"
                            title="Link to the home page"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/"
                            className="nav__link"
                            title="Link to the product page"
                        >
                            Products
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/"
                            className="nav__link nav__link--cart"
                            title="Open the cart"
                        >
                            Cart
                            <Cart />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
