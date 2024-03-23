import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/Menu/Menu';
import { Work } from './Work/Work';
import VakansiiImg from '../../../assets/img/image.webp'
import DunesImg from '../../../assets/img/imagege.webp'

const itemsW =["All", "Landing Page", "React", "Spa"]

export const Works=() => {
    return(
        <StyledWorks id='Works'>
            <center><SectionTitle maxWidth='10%'>My works</SectionTitle></center>
            <Menu menuItems={itemsW}/>
            <Div>
            <Work color='#267959' href2='https://github.com/Fotopolik21/vakansii' href='https://fotopolik21.github.io/vakansii/' title='Vakansii' text='In this project, I focused more on styling than on functional data).' src={DunesImg}/>
            <Work color='gold' href2='https://github.com/Fotopolik21/Dunes' href='https://fotopolik21.github.io/Dunes/' title='Dunes' text='This is my first attempt at a miniature in react, in my opinion it turned out to be very concise and stylish.' src={VakansiiImg}/>
            </Div>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 50vh;
    /* background-color: #252527; */
    display: flex;
    flex-direction: column;
    /* border: 3px solid #663366ba;
    border-radius: 5px; */
    margin-right: 4px;
    margin-left: 2px;

    :hover{
    border-color: #ff00ffb9;
}
    `
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 10px;
`