import './HeroBanner.scss';
import HeroBannerImage from '../../assets/heroBanner/planet.webp';
import HeroBannerImage2x from '../../assets/heroBanner/planet@2x.webp';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="hero-banner__container">
                <div className="hero-banner__image">
                    <img
                        className="hero-banner__image-src"
                        src={HeroBannerImage}
                        srcSet={`${HeroBannerImage} 1x, ${HeroBannerImage2x} 2x`}
                        alt="Earth planet"
                        loading="lazy"
                    />
                </div>
                <div className="hero-banner__content">
                    <h1 className="hero-banner__title">
                        Discover the vast expanses of
                        <span className="hero-banner__title--highlight">
                            {' '}
                            space
                        </span>
                    </h1>
                    <h2 className="hero-banner__subtitle">
                        Where the possibilities are
                        <span className="hero-banner__subtitle--highlight">
                            {' '}
                            endless!
                        </span>
                    </h2>
                    <a
                        href="/"
                        className="hero-banner__button"
                        title="Learn more"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
