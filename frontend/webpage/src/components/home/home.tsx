import '../../vendor/normalize.css';
import '../../fonts/font.css';
import './home.css'
import {Header} from '../header/index';
import {Body} from '../body/index';

export const Home = () =>{
    return(
        <div className='main'>
            <Header/>
            <Body/>
        </div>
    )
}