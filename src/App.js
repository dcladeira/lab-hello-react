import './App.css';
import IronhackLogo from './images/ironhack-logo-xs.png';
import MenuTop from './images/menu-top-xs.png';
import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png';
import Icon3 from './images/icon3.png';
import Icon4 from './images/icon4.png';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      
      <article className="Welcome">
        <header className="WelcomeHeader">
          <img className="ImgHeader" src={IronhackLogo} alt = "Ironhack logo"/>
          <img className="ImgHeader" src={MenuTop} alt = "Menu"/>
        </header>
        <section className="WelcomeText">
          <h1>Say hello to<br></br>ReactJS</h1>
          <p>You will learn how to use<br></br>the most popular frontend library,<br></br>and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </section>
      </article>
      
      <article className="FeaturesContainer">
        <Features image={Icon1} title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Features image={Icon2} title="Components" description="Build encapsulated components that manage their state."/>
        <Features image={Icon3} title="Single-Way" description="A set of immutable values are passed to the component's."/>
        <Features image={Icon4} title="JSX" description="Statically-typed, designed to run on modern browsers."/>
      </article>

    </div>
  );
}

export default App;
