import './Offer.scss';

const Offer = ({ id, title, subtitle, image, imageX2 }) => {
    const backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), 
    image-set(url('${image}') 1x, url('${imageX2}') 2x)`;

    return (
        <section
            className="offer"
            style={{ backgroundImage }}
        >
            <h1 className="offer__title">{title}</h1>
            <h2 className="offer__subtitle">{subtitle}</h2>
            <a
                href="/"
                className="offer__link"
            >
                Learn more
            </a>
        </section>
    );
};

export default Offer;
