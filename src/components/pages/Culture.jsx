import { BackgroundMapClear } from "../BackgroundMapClear";
import { HeaderCulture } from "../Headers/HeaderCulture";
import cEr from "../../assets/images/C&R QUADRATO.jpg";
import depth from "../../assets/images/DEPTH QUADRATO.jpg";
import { useNavigate } from "react-router-dom";
export function Culture() {
  const navigate = useNavigate();

  function handleCatchNRelease() {
    navigate("/CatchAndRelease");
  }
  function handleDepth() {
    navigate("/Depth");
  }
  return (
    <div>
      <HeaderCulture />
      <BackgroundMapClear>
        <div className="cultureBox">
          <div className="content">
            <div className="catch">
              <img
                src={cEr}
                alt="catch and release"
                onClick={handleCatchNRelease}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                sapiente dolore temporibus. Neque accusamus rerum in incidunt
                ducimus, temporibus ab possimus obcaecati deserunt et excepturi,
                magni expedita fugiat quibusdam!
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <img src={depth} alt="depth" onClick={handleDepth} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                sapiente dolore temporibus. Neque accusamus rerum in incidunt
                ducimus, temporibus ab possimus obcaecati deserunt et excepturi,
                magni expedita fugiat quibusdam!
              </p>
            </div>
          </div>
        </div>
      </BackgroundMapClear>
    </div>
  );
}
