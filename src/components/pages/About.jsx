import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderAbout } from "../Headers/HeaderAbout";

export function About() {
  return (
    <div>
      <BackgroundMapClear>
        <HeaderAbout />
        <ContactForm/>
      </BackgroundMapClear>
    </div>
  );
}
