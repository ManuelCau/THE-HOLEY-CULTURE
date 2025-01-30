import lure from "../assets/images/lures.png";

export function DesignHome() {
  return (
    <div className="designBox">
      <h2>DESIGN</h2>
      <div className="designElements">
        <div className="designParagraph">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining Lorem Ipsums simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into.
          </p>
          <button>SHOW MORE</button>
        </div>
        <img src={lure} alt="holeyLures" loading="lazy" />
      </div>
    </div>
  );
}
