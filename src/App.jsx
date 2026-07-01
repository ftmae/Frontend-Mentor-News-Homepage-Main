import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from './components/Main/Main.jsx';

export default function App(){
  return(
    <div className="body-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}