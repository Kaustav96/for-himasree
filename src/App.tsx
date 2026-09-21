import { useEffect } from "react";
import {
  ArrowDown,
  Camera,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import FloatingHearts from "./components/FloatingHearts";
import LoveLetter from "./components/LoveLetter";

const memories = [
  {
    date: "OUR FIRST MEMORY",
    title: "Where our story began",
    text: "The moment our paths crossed and our journey together began. I will never forget 10th July 2025.",
    image: "memories/_DSC2922.jpeg",
    position: "center 45%",
  },
  {
    date: "A FAVORITE MEMORY",
    title: "One of my favorite moments",
    text: "Our first Ganesh Chaturthi together. Praying to bappa to remove all obstacles we face in life and that we overcome every challenge together.",
    image: "memories/Memory2.jpg",
    position: "center 28%",
  },
  {
    date: "07 AUGUST 2026",
    title: "The day we became husband & wife",
    text: "The day we chose each other and started this chapter of our lives together.",
    image: "memories/wedding.jpg",
    position: "center 62%",
  },
];

const reasons = [
  {
    number: "01",
    icon: "❤️",
    title: "The way you care",
    text: "The way you care about the people you love is something I notice, admire and sometimes probably fail to tell you enough.",
    detail: "Your heart is one of the things I fell in love with.",
  },
  {
    number: "02",
    icon: "🌸",
    title: "The little things",
    text: "It is not always the big moments. It is the small conversations, the little smiles, the ordinary days and the memories we create without planning them.",
    detail: "Those ordinary moments with you never feel ordinary to me.",
  },
  {
    number: "03",
    icon: "✨",
    title: "The person you are",
    text: "I love you for who you are — your personality, your emotions, your dreams, your strengths and even the things that make us different.",
    detail: "I don't want to change who you are. I want to understand you better.",
  },
  {
    number: "04",
    icon: "🏠",
    title: "You feel like home",
    text: "Somewhere along the way, being with you stopped feeling like simply having a partner. You became the person with whom I want to share the everyday parts of life.",
    detail: "The life we chose together matters more to me than my ego ever should.",
  },
];

const commitments = [
  {
    number: "01",
    title: "I will listen.",
    short: "Before I respond, I will try to understand.",
    text: "I don't want every disagreement to become a battle where I am trying to prove that I am right. I want to listen to what you are actually saying and understand what you are feeling.",
  },
  {
    number: "02",
    title: "I will pause.",
    short: "Anger does not get to choose my words.",
    text: "When I feel angry or frustrated, I want to learn to step back instead of reacting immediately. I want to give myself enough space to choose my words instead of letting anger choose them for me.",
  },
  {
    number: "03",
    title: "I will speak with kindness.",
    short: "Being upset is never an excuse to hurt you.",
    text: "We will disagree sometimes. We will have difficult conversations. But even then, you deserve kindness, dignity and respect from me.",
  },
  {
    number: "04",
    title: "I will respect your family.",
    short: "The people you love deserve my respect too.",
    text: "I understand that your family is an important part of your life. My behavior towards them should always reflect the respect I have for you and for the relationship we are building together.",
  },
  {
    number: "05",
    title: "I will protect our relationship.",
    short: "I don't want my ego to become bigger than us.",
    text: "I don't want to win an argument and lose something much more important. I want to learn when to let my ego go, when to apologize and when to simply hold your hand and listen.",
  },
  {
    number: "06",
    title: "I will show you.",
    short: "My actions need to say more than this page.",
    text: "I know words are easy to write. Trust is different. I don't expect you to believe that I have changed because I wrote these things. I want consistency over time to show you.",
  },
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <FloatingHearts />

      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="hero-heart">
            <Heart size={24} fill="currentColor" />
          </div>

          <span className="eyebrow">A letter from Kaustav</span>

          <h1>
            For
            <br />
            <em>Himasree.</em>
          </h1>

          <p className="hero-subtitle">
            There are some things that are difficult to say out loud.
            <br />
            So I wrote them down.
          </p>

          <button
            className="primary-button"
            onClick={() => scrollTo("accountability")}
          >
            Read what I couldn't say
            <ArrowDown size={18} />
          </button>
        </div>

        <div className="scroll-hint">
          <span>take your time</span>
        </div>
      </section>

      <section id="accountability" className="accountability-section">
        <div className="section-container narrow reveal">
          <span className="small-label">01 · I need to say this first</span>

          <h2>
            I was wrong.
            <br />
            <em>And I am sorry.</em>
          </h2>

          <p>
            Himasree, I know I hurt you. I know there were things I said and
            ways I behaved that you never deserved from me.
          </p>

          <p>
            I was rude. I was disrespectful. I allowed anger, frustration and
            ego to come before the respect I should always have for you.
          </p>

          <div className="truth-card">
            <ShieldCheck size={25} />
            <div>
              <strong>No excuses.</strong>
              <p>
                I am not writing this to justify what happened. I was wrong,
                and I want to take responsibility for it.
              </p>
            </div>
          </div>

          <p>
            And I am especially sorry that my behavior affected your family.
            They are people you love, and they should have received kindness,
            dignity and respect from me.
          </p>

          <p className="emphasis">
            I cannot change what happened.
            <br />
            But I can change what happens next.
          </p>
        </div>
      </section>

      <section className="contrast-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="small-label">
              02 · Looking honestly at myself
            </span>
            <h2>What I should have done.</h2>
            <p>I cannot undo my reactions. But I can learn from them.</p>
          </div>

          <div className="contrast-grid">
            <div className="contrast-card wrong reveal">
              <span className="contrast-label">What happened</span>
              <div className="contrast-item">
                <span>01</span>
                <p>Reacted immediately</p>
              </div>
              <div className="contrast-item">
                <span>02</span>
                <p>Let anger take over</p>
              </div>
              <div className="contrast-item">
                <span>03</span>
                <p>Focused on being right</p>
              </div>
              <div className="contrast-item">
                <span>04</span>
                <p>Used words that hurt</p>
              </div>
            </div>

            <div className="contrast-arrow reveal">→</div>

            <div className="contrast-card right reveal">
              <span className="contrast-label">What I want to learn</span>
              <div className="contrast-item">
                <span>01</span>
                <p>Pause and listen</p>
              </div>
              <div className="contrast-item">
                <span>02</span>
                <p>Control my anger</p>
              </div>
              <div className="contrast-item">
                <span>03</span>
                <p>Understand before reacting</p>
              </div>
              <div className="contrast-item">
                <span>04</span>
                <p>Speak with kindness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <span className="small-label">03 · Us</span>
            <h2>
              Before this moment,
              <br />
              there was <em>us.</em>
            </h2>
            <p>
              One difficult moment should never make me forget all the
              beautiful moments that brought us here.
            </p>
          </div>

          <div className="timeline">
            {memories.map((memory, index) => (
              <article className="memory reveal" key={memory.title}>
                <div className="memory-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="memory-photo">
                  <img
                    src={`${import.meta.env.BASE_URL}${memory.image}`}
                    alt={memory.title}
                    style={{ objectPosition: memory.position }}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.parentElement?.classList.add(
                        "photo-placeholder"
                      );
                    }}
                  />
                  <Camera size={24} />
                </div>

                <div className="memory-content">
                  <span>{memory.date}</span>
                  <h3>{memory.title}</h3>
                  <p>{memory.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="memory-note reveal">
            <Sparkles size={20} />
            <p>
              <strong>These are our moments.</strong>
              <br />
              The moments that remind me why our story means so much to me.
            </p>
          </div>
        </div>
      </section>

      <section className="love-section">
        <div className="love-orb love-orb-one" />
        <div className="love-orb love-orb-two" />

        <div className="section-container">
          <div className="section-heading love-heading reveal">
            <span className="small-label">
              04 · The things I sometimes fail to say
            </span>

            <h2>
              Why I
              <br />
              <em>love you.</em>
            </h2>

            <p>
              There are so many answers to that question.
              <br />
              These are just a few of them.
            </p>
          </div>

          <div className="reason-grid">
            {reasons.map((reason) => (
              <article
                className="reason-card reveal"
                key={reason.number}
              >
                <div className="reason-card-top">
                  <span className="reason-number">
                    {reason.number}
                  </span>

                  <span className="reason-icon">
                    {reason.icon}
                  </span>
                </div>

                <div className="reason-card-content">
                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>

                  <div className="reason-detail">
                    <span />
                    <p>{reason.detail}</p>
                  </div>
                </div>

                <div className="reason-card-bottom">
                  <span>For Himasree</span>
                  <Heart size={14} fill="currentColor" />
                </div>
              </article>
            ))}
          </div>

          <div className="love-closing reveal">
            <Heart size={18} fill="currentColor" />

            <p>
              And perhaps the simplest answer is also the hardest one to explain.
            </p>

            <strong>
              I love you because you are you.
            </strong>
          </div>
        </div>
      </section>

      <LoveLetter />

      <section className="commitments-section">
        <div className="commitments-background-number">
          06
        </div>

        <div className="section-container">
          <div className="section-heading reveal">
            <span className="small-label">
              06 · Not promises for a page
            </span>

            <h2>
              Things I want
              <br />
              to <em>change.</em>
            </h2>

            <p>
              I don't want this website to be the proof.
              <br />
              I want the way I behave from now on to be the proof.
            </p>
          </div>

          <div className="commitment-list">
            {commitments.map((item) => (
              <article
                className="commitment-item reveal"
                key={item.number}
              >
                <div className="commitment-number">
                  {item.number}
                </div>

                <div className="commitment-main">
                  <h3>{item.title}</h3>

                  <p className="commitment-short">
                    {item.short}
                  </p>

                  <p className="commitment-detail">
                    {item.text}
                  </p>
                </div>

                <div className="commitment-symbol">
                  <Heart size={17} />
                </div>
              </article>
            ))}
          </div>

          <div className="commitment-closing reveal">
            <span className="small-label">
              One thing I know
            </span>

            <p>
              I don't need to promise that I will never make a mistake.
              <br />
              I need to promise that I will take responsibility when I do.
            </p>
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-stars" aria-hidden="true">
          <span>✦</span>
          <span>✦</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✦</span>
        </div>

        <div className="final-glow" />

        <div className="final-content reveal">
          <div className="final-heart">
            <Heart size={25} fill="currentColor" />
          </div>

          <span className="small-label">
            If there is one thing I hope you remember
          </span>

          <h2>
            I can't change
            <br />
            what happened.
            <br />
            <em>But I can change what happens next.</em>
          </h2>

          <div className="final-lines">
            <p>I want to make you feel loved.</p>
            <p>I want to make you feel respected.</p>
            <p>I want to listen to you.</p>
            <p>I want to protect what we have.</p>
          </div>

          <div className="final-message">
            <p>Himasree,</p>

            <p>
              I am truly, deeply sorry for hurting you and for
              disrespecting you and your family.
            </p>

            <p>
              I don't expect this page to fix everything.
              I don't expect you to forget.
              And I don't expect forgiveness simply because
              I said sorry.
            </p>

            <p>
              I just want to start doing better.
              <br />
              And keep doing better.
            </p>

            <p className="final-love">
              I love you.
              <br />
              And I want my actions to prove it.
            </p>

            <div className="final-signature">
              <div className="final-signature-line" />

              <div>
                <Heart size={17} fill="currentColor" />
                <span>Kaustav</span>
              </div>
            </div>
          </div>

          <button
            className="read-again"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <Heart size={16} />
            Read it again
          </button>
        </div>
      </section>

      <footer className="footer">
        <div>❤️</div>
        <p>Always choosing kindness. Always choosing respect.</p>
        <span>— Kaustav</span>
      </footer>
    </main>
  );
}

export default App;
