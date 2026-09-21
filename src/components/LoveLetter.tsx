import { useState } from "react";
import { Heart, MailOpen, Mail } from "lucide-react";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="letter-section reveal">
      <div className="section-container narrow">
        <span className="small-label">
          Something I need you to know
        </span>

        <h2>
          Open this when
          <br />
          you're ready.
        </h2>

        {!opened ? (
          <button
            className="envelope"
            onClick={() => setOpened(true)}
            aria-label="Open my letter"
          >
            <Mail size={46} />

            <span>
              Open my letter
            </span>

            <small>
              No pressure. Just read it when you're ready.
            </small>
          </button>
        ) : (
          <div className="letter reveal visible">
            <div className="letter-icon">
              <MailOpen size={28} />
            </div>

            <p>
              Himasree,
            </p>

            <p>
              I am truly sorry for the way I behaved with you and your
              family. There is no excuse for being rude or disrespectful,
              especially toward the people who mean so much to you.
            </p>

            <p>
              You have given me your love, your trust and your life.
              The least you deserve from me is respect — every single day,
              especially during difficult moments.
            </p>

            <p>
              I know that I cannot undo what happened simply by saying
              "sorry". I cannot ask you to forget it either.
            </p>

            <p>
              What I can do is learn from it.
              I can listen better.
              I can control my words.
              I can treat you and your family with the respect you deserve.
            </p>

            <p>
              I love you, Himasree.
            </p>

            <p>
              And I don't want my anger, ego or words to ever become more
              important than the person I love.
            </p>

            <div className="signature">
              <Heart size={18} fill="currentColor" />
              <span>Kaustav</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}