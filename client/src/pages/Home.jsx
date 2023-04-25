import Navbar from "../components/Navbar/Navbar";
import Plan from "../components/Plan/Plan";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import Slidebar from "../components/Slidebar/Slidebar"


function Home() {

  return (
    <div>
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
        </div>
        <div className="slidebar">
          <Slidebar />
        </div>
        <div className="carr">
          <MyCarousel />
        </div>
        <div className="mx-auto">
          <Plan />
        </div>
    </div>
  );
}

export default Home;