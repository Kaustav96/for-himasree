const promises = [
  {
    number: "01",
    title: "I will listen.",
    text: "Not just wait for my turn to speak. I will actually listen to understand you.",
  },
  {
    number: "02",
    title: "I will speak with kindness.",
    text: "Even when I am angry, frustrated or hurt, I will remember that my words have consequences.",
  },
  {
    number: "03",
    title: "I will respect you and your family.",
    text: "Your family matters because they matter to you. They deserve my respect and dignity.",
  },
  {
    number: "04",
    title: "I will earn your trust through actions.",
    text: "I don't want to make promises only with words. I want my actions to prove that I mean them.",
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
            <div className="promise-card" key={promise.number}>
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