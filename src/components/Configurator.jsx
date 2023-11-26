import { useCustomization } from "../contexts/Customization";

import whiteMarble from "../assets/whiteMarble.jpg";
import blackMarble from "../assets/blackMarble.png";

const Configurator = () => {
  const { material, setMaterial } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Material/Color</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "white" ? "item--active" : ""}`}
            onClick={() => setMaterial("white")}
          >
            <img src={whiteMarble} alt="White Marble" />
          </div>
          <div
            className={`item ${material === "black" ? "item--active" : ""}`}
            onClick={() => setMaterial("black")}
          >
            <img src={blackMarble} alt="Black Marble" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
