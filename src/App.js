import './App.css';
import styled, { keyframes } from "styled-components";
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

function App() {
  return (
    <div className="App">
      <Header />
      <FadeInDiv>
        <Home />
      </FadeInDiv>
      <Footer />
    </div>
  );
}

export default App;
