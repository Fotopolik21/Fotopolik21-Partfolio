import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/Main/Main';
import { Skills } from './layout/sections/Skills/Skills';
import { Works } from './layout/sections/Works/Works';
import { Testimony } from './layout/sections/Testimony/Testimony';
import { Contacts } from './layout/sections/Contacts/Contacts';
import {Slogan} from './layout/sections/slogan/Slogan'
import { Footer } from './layout/footer/Footer';


function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
};

export default App;