const sections = [
  {
    number: "01",
    title: "I was wrong.",
    text: `
      I was rude. I was disrespectful. I let my anger, frustration and ego
      come before the respect I should always have for you.

      There is no excuse for that.

      You should never have had to experience that side of me, especially
      from the person who is supposed to love you, stand beside you and make
      you feel safe.
    `,
  },
  {
    number: "02",
    title: "I hurt you, and I hurt the people you love.",
    text: `
      I understand that what I did didn't only hurt you.

      I was disrespectful towards your family too, and I am genuinely sorry
      for that.

      Your family is important to you, which means they should have been
      treated with kindness and respect by me. I should have understood that
      instead of allowing my emotions to control the way I behaved.

      I cannot undo what happened, but I can acknowledge that I was wrong.
    `,
  },
  {
    number: "03",
    title: "You deserve my respect.",
    text: `
      You are not just my wife.

      You are my partner, my best friend, the person I chose to build my
      life with, and one of the most important people in my world.

      You deserve to be spoken to with patience and kindness. You deserve
      respect even when we disagree. In fact, especially when we disagree.

      Being angry is never an excuse to disrespect the person I love.
    `,
  },
  {
    number: "04",
    title: "I love you.",
    text: `
      I love you, Himasree.

      More than I sometimes know how to express properly.

      I don't want to imagine a life without you. I don't want my anger,
      ego or a moment of frustration to ever become more important than
      our relationship.

      You mean far too much to me for me to keep making the same mistakes.
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