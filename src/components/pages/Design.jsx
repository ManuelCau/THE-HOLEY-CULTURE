import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderDesign } from "../Headers/HeaderDesign";

export function Design() {
  return (
    <div>
      <BackgroundMapClear>
        <HeaderDesign />
         <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
