import HeroBanner from '../components/HeroBanner/HeroBanner';
import Offers from '../components/Offers/Offers';
import Suggestion from '../components/Suggestion/Suggestion';

const Home = () => {
    return (
        <main className="main">
            <HeroBanner />
            <div className="container">
                <Offers />
                <Suggestion />
            </div>
        </main>
    );
};

export default Home;
