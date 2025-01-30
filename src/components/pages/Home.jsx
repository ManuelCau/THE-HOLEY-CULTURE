import { LuresHome } from "../LuresHome";
import { DesignHome } from "../DesignHome";
import { BackGroundMap } from "../BackgroundMap";
import { HeaderHome } from "../HeaderHome";

export function Home() {
  return (
    <>
      <div className="homeComponents">
        <HeaderHome />
        <div className="homeContent">
          <LuresHome />
          <DesignHome />
          <DesignHome /> {/* prova */}
        </div>
      </div>
      <BackGroundMap />
    </>
  );
}
