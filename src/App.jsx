import CursorFollower from "./components/CursorFollower/CursorFollower";
import IntroSection from "./components/IntroSection/IntroSection";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CursorFollower />

      <Navbar />
      <IntroSection />
      <Marquee />
    </>
  );
}

export default App;
