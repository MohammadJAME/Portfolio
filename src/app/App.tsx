import Header from "../layouts/Header/components/Header";
import Footer from "../layouts/Footer/components/Footer";
import Menu from "../layouts/Menu/components/Menu";
import { useLenis } from "../animations/useLenis";
import Main from "../layouts/Main/components/Main";

const App = () => {
  useLenis();
  return (
    <div className=" text-white bg-black scroll-smooth">
      <div className="w-full bg-linear-to-b from-[rgba(0,0,0,0.7)] to-transparent fixed top-0 z-50 px-4 h-16">
        <Header />
      </div>
      <Menu />
      <Main/>
      <Footer />
    </div>
  );
};

export default App;
