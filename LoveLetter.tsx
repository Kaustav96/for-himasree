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
              I am sorry.
            </p>

            <p>
              Not just for one particular thing, but for the way I behaved.
              I was rude and disrespectful towards you, and I behaved in a
              way that you did not deserve from me.
            </p>

            <p>
              I am especially sorry that my behavior affected your family.
              They are people you love, and I should have treated them with
              the same respect and dignity that I expect for the people I
              love.
            </p>

            <p>
              I know that saying "sorry" does not erase what happened.
              I know that I cannot simply expect everything to become okay
              because I have apologized.
            </p>

            <p>
              And I don't want to make excuses for myself.
            </p>

            <p>
              I was wrong.
            </p>

            <p>
              You deserve a husband who can disagree with you without
              disrespecting you. Someone who can be angry without becoming
              cruel. Someone who can listen instead of simply reacting.
            </p>

            <p>
              I want to become that person.
            </p>

            <p>
              I love you, Himasree.
            </p>

            <p>
              I don't want to imagine my life without you. But I also
              understand that loving you means respecting your feelings,
              your space and your emotions.
            </p>

            <p>
              I don't want you to believe me simply because I wrote this.
            </p>

            <p>
              I want my actions to show you.
            </p>

            <p>
              I want to listen more.
              I want to speak with kindness.
              I want to control my anger.
              I want to respect you.
              And I want to respect your family.
            </p>

            <p>
              I know trust is built through actions, not promises.
              So I don't want to make a hundred promises here.
            </p>

            <p>
              I just want to start doing better.
              And keep doing better.
            </p>

            <p>
              I am truly, deeply sorry.
            </p>

            <p>
              And I love you more than these words can explain.
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