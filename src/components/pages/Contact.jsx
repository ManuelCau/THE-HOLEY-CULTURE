import { BackgroundMapClear } from "../BackgroundMapClear";
import { ContactForm } from "../ContactForm";
import { HeaderContacts } from "../Headers/HeaderContacts";

export function Contact() {
  return (
    <div>
      <HeaderContacts />
      <BackgroundMapClear>
        <ContactForm />
      </BackgroundMapClear>
    </div>
  );
}
