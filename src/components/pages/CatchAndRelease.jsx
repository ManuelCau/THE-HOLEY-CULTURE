import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderCatchAndRelease } from "../Headers/HeaderCatchAndRelease";

export function CatchAndRelease() {
  return (
    <div>
      <HeaderCatchAndRelease />
      <BackgroundMapClear>
        <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
