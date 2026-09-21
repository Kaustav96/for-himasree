const sections = [
  {
    number: "01",
    title: "I was wrong.",
    text: `
      I was rude. I was disrespectful. And I behaved in ways that I should
      never have behaved with the person I love.
    `,
  },
  {
    number: "02",
    title: "I hurt you, and I hurt the people you love.",
    text: `
      I know that my behavior didn't affect only you. I also disrespected
      and hurt your family — people who deserve my respect and kindness.
      For that, I am genuinely sorry.
    `,
  },
  {
    number: "03",
    title: "You deserve my respect.",
    text: `
      You are my wife, my partner and one of the most important people in
      my life. You deserve to be spoken to with patience, kindness and
      respect — even when we disagree.
    `,
  },
  {
    number: "04",
    title: "I love you.",
    text: `
      I love you more than I sometimes know how to express properly.
      The thought of a life without you is something I don't want to imagine.
      You are not someone I want to lose.
    `,
  },
];

export default function ApologySection() {
  return (
    <section className="apology-section">
      <div className="section-container">
        {sections.map((section) => (
          <article
            className="apology-card reveal"
            key={section.number}
          >
            <span className="section-number">
              {section.number}
            </span>

            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}