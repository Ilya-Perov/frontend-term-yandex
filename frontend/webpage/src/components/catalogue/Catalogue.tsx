import './Catalogue.css';
import { Header } from '../header';
import Footer from '../footer/footer';
import CatalogueBody from '../catalogueBody/catalogueBody';

export const Catalogue = () => {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <CatalogueBody />
      </div>
      <Footer />
    </div>
  );
};
