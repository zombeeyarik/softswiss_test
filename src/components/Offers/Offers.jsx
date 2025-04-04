import { offers } from '../../data/offers.js';
import Offer from '../Offer/Offer';
import './Offers.scss';

const Offers = () => {
    return (
        <section className="offers">
            <h3 className="offers__title">Offers</h3>
            <ul className="offers__list">
                {offers.map((offer, index) => (
                    <li
                        className={`offers__item ${
                            index % 3 === 0 ? 'offers__item--wide' : ''
                        }`}
                        key={offer.id}
                    >
                        <Offer {...offer} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Offers;
