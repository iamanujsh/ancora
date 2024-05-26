import CursorFollower from "./components/CursorFollower/CursorFollower";
import IntroSection from "./components/IntroSection/IntroSection";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import GrowingCircle from "./components/GrowingCircle/GrowingCircle";

function App() {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <IntroSection />
      <Marquee />
      <div className="relative h-screen overflow-hidden">
        <GrowingCircle />
      </div>
    </>
  );
}

export default App;
