import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "./App.css";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import FormComponent from "./components/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import xmemes from './assets/xlogo.svg';
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>XMemes</title>
        <link rel="icon" href={xmemes} type="image/icon type"></link>
      </Helmet>
      <HeaderComponent />
      <br />
      <br />
      <br />
      <br />
      <FormComponent />
      <br />
      <CardComponent />
      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}

export default App;