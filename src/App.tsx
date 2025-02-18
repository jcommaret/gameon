import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Modal } from "./components/modal";

import "./style/main.scss";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Header />
      <main>
        <Hero />
      </main>
      <Modal />
      <footer>
        <p className="copyrights">Copyright 2014 - 2022, GameOn Inc.</p>
      </footer>
    </>
  );
}

export default App;
