import { useState } from "react";
import {
  Heart,
  Mail,
  MailOpen,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const paragraphs = [
  {
    text: "Himasree,",
    className: "letter-opening",
  },
  {
    text: "I am sorry.",
    className: "letter-emphasis",
  },
  {
    text: "Not just for one particular thing, but for the way I behaved. I was rude and disrespectful towards you, and you did not deserve that from me.",
  },
  {
    text: "I am especially sorry that my behavior affected your family. They are people you love, and I should have treated them with kindness, dignity and respect.",
  },
  {
    text: "I know that saying sorry does not erase what happened. I know that I cannot simply expect everything to become okay because I have apologized.",
  },
  {
    text: "And I don't want to make excuses for myself.",
  },
  {
    text: "I was wrong.",
    className: "letter-emphasis",
  },
  {
    text: "You deserve a husband who can disagree with you without disrespecting you. Someone who can be angry without becoming hurtful. Someone who can listen instead of simply reacting.",
  },
  {
    text: "I want to become that person.",
    className: "letter-emphasis soft",
  },
  {
    text: "I love you, Himasree.",
    className: "letter-love",
  },
  {
    text: "I don't want to imagine my life without you. But I also understand that loving you means respecting your feelings, your space and your emotions.",
  },
  {
    text: "I don't want you to believe me simply because I wrote this.",
  },
  {
    text: "I want my actions to show you.",
    className: "letter-emphasis",
  },
  {
    text: "I want to listen more.\nI want to speak with kindness.\nI want to control my anger.\nI want to respect you.\nI want to respect your family.",
    className: "letter-list",
  },
  {
    text: "I know trust is built through actions, not promises.",
  },
  {
    text: "So I don't want to make a hundred promises here. I just want to start doing better. And keep doing better.",
  },
  {
    text: "I am truly, deeply sorry.",
  },
  {
    text: "And I love you more than these words can explain.",
    className: "letter-love",
  },
];

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="letter-section">
      <div className="section-container narrow">
        <div className="section-heading reveal">
          <span className="small-label">
            05 · Something I need you to know
          </span>

          <h2>
            A letter
            <br />
            <em>for you.</em>
          </h2>

          <p>
            No pressure. No expectation.
            <br />
            Read it whenever you're ready.
          </p>
        </div>

        {!opened ? (
          <div className="envelope-wrapper reveal">
            <button
              className="envelope"
              onClick={() => setOpened(true)}
              aria-label="Open Kaustav's letter"
            >
              <div className="envelope-flap" />

              <div className="envelope-body">
                <div className="envelope-heart">
                  <Heart size={25} fill="currentColor" />
                </div>

                <Mail size={36} className="envelope-mail" />

                <strong>For Himasree</strong>

                <span>Open my letter</span>

                <small>
                  Written with love,
                  <br />
                  honesty and no excuses.
                </small>
              </div>
            </button>

            <div className="envelope-hint">
              <Sparkles size={14} />
              <span>Take your time</span>
            </div>
          </div>
        ) : (
          <div className="letter-container reveal visible">
            <div className="letter-paper">
              <div className="letter-decoration letter-decoration-one">
                ♥
              </div>

              <div className="letter-decoration letter-decoration-two">
                ♥
              </div>

              <div className="letter-top">
                <MailOpen size={24} />

                <span>A letter from Kaustav</span>
              </div>

              <div className="letter-content">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={`${paragraph.text}-${index}`}
                    className={paragraph.className ?? ""}
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    {paragraph.text.split("\n").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex <
                          paragraph.text.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                ))}
              </div>

              <div className="letter-signature">
                <div className="signature-line" />

                <div className="signature-name">
                  <Heart size={17} fill="currentColor" />
                  <span>Kaustav</span>
                </div>
              </div>

              <button
                className="close-letter"
                onClick={() => setOpened(false)}
              >
                <RotateCcw size={14} />
                Fold the letter back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}