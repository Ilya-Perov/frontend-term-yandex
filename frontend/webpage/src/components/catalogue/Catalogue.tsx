import './catalogue.css';
import { Header } from '../header';
import CatalogueBody from '../catalogueBody/catalogueBody'; 

const Catalogue = () => {
  return (
    <div className='main'>
      <Header />
      <CatalogueBody /> 
    </div>
  );
};

export default Catalogue;
