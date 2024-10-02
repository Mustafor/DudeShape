import About from './components/About';
import './App.css';
import Company from './components/Company';
import Header from './components/Header';
import Hero from './components/Hero';
import Furnitur from './components/Furnitur';
import All from './components/All';
import Customer from './components/Customer';
import News from './components/News';

function App() {
  return (
    <>
    <Header/>
    <main>
    <Hero/>
    <Company/>
    <About/>
    <Furnitur/>
    <All/>
    <Customer/>
    <News/>
    </main>
    </>
  )
}

export default App;
