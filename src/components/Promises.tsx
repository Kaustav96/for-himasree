const promises = [
  {
    number: "01",
    title: "I will listen.",
    text: "I will stop trying to immediately defend myself or prove that I am right. I will listen to what you are actually feeling.",
  },
  {
    number: "02",
    title: "I will speak with kindness.",
    text: "Even when I am angry, frustrated or hurt, I will remember that my words can hurt the person I love. Anger will never be an excuse for disrespect.",
  },
  {
    number: "03",
    title: "I will respect you and your family.",
    text: "Your family is important to you, and I will treat them with the respect, dignity and kindness they deserve.",
  },
  {
    number: "04",
    title: "I will earn your trust through actions.",
    text: "I don't expect you to trust me just because I promise to change. I want my behavior over time to show you that I mean what I say.",
  },
];

export default function Promises() {
  return (
    <section className="promises-section reveal">
      <div className="section-container">
        <div className="section-heading">
          <span className="small-label">
            Not just words
          </span>

          <h2>
            My promises to you.
          </h2>

          <p>
            I don't want this page to be the proof.
            I want the way I behave from now on to be the proof.
          </p>
        </div>

        <div className="promise-grid">
          {promises.map((promise) => (
            <div
              className="promise-card"
              key={promise.number}
            >
              <span>{promise.number}</span>

              <h3>{promise.title}</h3>

              <p>{promise.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}