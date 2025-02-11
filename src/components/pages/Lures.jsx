import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderLures } from "../Headers/HeaderLures";

export function Lures() {
  return (
    <div>
      <BackgroundMapClear>
        <HeaderLures />
        <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
