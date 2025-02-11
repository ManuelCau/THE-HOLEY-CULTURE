import lures from "../assets/SVG/holey-lures.svg";

export function LuresHome() {
  return (
    <div className="lureBox">
      <h2>LURES</h2>
      <div className="luresHome">
        <div className="lureParagraph">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining Lorem Ipsums simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into.
          </p>
          <button>SHOW MORE</button>
        </div>

        <img src={lures} alt="holeyLures" loading="lazy" />
      </div>
    </div>
  );
}
