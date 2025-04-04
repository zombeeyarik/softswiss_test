import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
