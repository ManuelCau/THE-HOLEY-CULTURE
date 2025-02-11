import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xyzkpeyk");
  if (state.succeeded) {
    return (
      <div className="formResponse">
        <p>Grazie per il tuo messaggio!</p>
      </div>
    );
  }
  return (
    <div className="formContainer">
      <p>
        Contattaci per qualsiasi curiosità o informazione relativa al progetto o
        i nostri prodotti!
      </p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="name">Nome e cognome</label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="name" field="name" errors={state.errors} />

        <textarea id="message" name="message" placeholder="Il tuo messaggio" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
