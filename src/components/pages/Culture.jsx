import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderCulture } from "../Headers/HeaderCulture";

export function Culture() {
  return (
    <div>
      <BackgroundMapClear>
        <HeaderCulture />
        <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
