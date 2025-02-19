import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Modal } from "./components/modal";
import { Footer } from "./components/footer";

import "./style/main.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modal />
      </main>
      <Footer />
    </>
  );
}

export default App;
