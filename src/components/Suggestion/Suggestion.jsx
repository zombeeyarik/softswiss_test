import { suggestion } from '../../data/suggestion.js';
import './Suggestion.scss';

const Suggestion = () => {
    return (
        <section className="suggestion">
            <h3 className="suggestion__title">{suggestion.title}</h3>
            <input
                type="checkbox"
                id="suggestion-read-more-checkbox"
                className="suggestion__checkbox suggestion__checkbox--hidden"
            />
            <p className="suggestion__text">{suggestion.text}</p>
            <label
                htmlFor="suggestion-read-more-checkbox"
                className="suggestion__button"
            >
                <span className="suggestion__button-text suggestion__button-text--collapsed">
                    Read more
                </span>
                <span className="suggestion__button-text suggestion__button-text--expanded">
                    Read less
                </span>
            </label>
        </section>
    );
};

export default Suggestion;
