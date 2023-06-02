import Navbar from "../components/Navbar/Navbar";
import Plan from "../components/Plan/Plan";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import Slidebar from "../components/Slidebar/Slidebar";
import { FaArrowCircleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="d-flex-column justify-content-center">
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
      </div>
      <div className="slidebar">
        <Slidebar />
      </div>
      <div className="carr mb-5">
        <MyCarousel />
      </div>
      
      <div className="planes d-flex justify-content-center">
        <Plan />
        
      </div>
      <div className="scroll-top-container">
        <FaArrowCircleUp
          className="scroll-top"
          onClick={scrollTop}
          style={{ display: showScroll ? 'flex' : 'none' }}
        />
      </div>
      
    </div>
  );
}

export default Home;