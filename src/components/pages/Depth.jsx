import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderDepth } from "../Headers/HeaderDepth";

export function Depth() {
  return (
    <div>
      <HeaderDepth />
      <BackgroundMapClear>
        <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
