import { LuresHome } from "../LuresHome";
import { DesignHome } from "../DesignHome";
import { BackGroundMap } from "../BackgroundMap";
import { HeaderHome } from "../HeaderHome";
import { ContactForm } from "../ContactForm";

export function Home() {
  return (
    <>
      <div className="homeComponents">
        <HeaderHome />

        <BackGroundMap>
          <div className="homeContent">
            <LuresHome />
            <DesignHome />
            <ContactForm />
          </div>
        </BackGroundMap>
      </div>
    </>
  );
}
