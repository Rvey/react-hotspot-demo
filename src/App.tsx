import reactLogo from "./assets/car.png";
import ImageHotspots from "react-image-hotspots";
import "./index.css";
import { useState } from "react";
function App() {
  const [hotspots, setHotspots] = useState(1);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "300px",
        }}
      >
        <ImageHotspots
          src={reactLogo}
          hideFullscreenControl={true}
          hideZoomControls={true}
          hideMinimap={true}
          alt="Sample image"
          hotspots={[
            {
              x: 10,
              y: 30,
              content: (
                <span onMouseEnter={() => setHotspots(1)}>Hotspot 1</span>
              ),
            },
            {
              x: 40,
              y: 70,
              content: (
                <span onMouseEnter={() => setHotspots(2)}>Hotspot 2</span>
              ),
            },
            {
              x: 80,
              y: 30,
              content: (
                <span onMouseEnter={() => setHotspots(3)}>Hotspot 3</span>
              ),
            },
          ]}
        />
      </div>

      <div>
        {hotspots === 1 && <div>hotspot 1</div>}
        {hotspots === 2 && <div>hotspot 2</div>}
        {hotspots === 3 && <div>hotspot 3</div>}
      </div>
    </>
  );
}

export default App;
