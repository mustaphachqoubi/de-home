import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import BestChoice from "./Components/BestChoice";
import OurServices from "./Components/OurServices";
import Testimonial from "./Components/Testimonial";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div className="bg-sky-500 h-screen w-screen lg:bg-stone-50 lg:bg-[url('assets/estate.jpeg')] bg-contain bg-no-repeat  ">
        <Navbar />
        <HeroBanner />
        <BestChoice />
        <OurServices />
        <Testimonial />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
