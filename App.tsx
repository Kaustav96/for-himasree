import { useEffect } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ApologySection from "./components/ApologySection";
import LoveLetter from "./components/LoveLetter";
import Promises from "./components/Promises";
import Footer from "./components/Footer";
import FloatingHearts from "./components/FloatingHearts";

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
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <FloatingHearts />

      <Hero />

      <Intro />

      <ApologySection />

      <LoveLetter />

      <Promises />

      <section className="final-section reveal">
        <div className="final-content">
          <span className="small-label">
            If I could say one thing...
          </span>

          <h2>
            I don't want you to believe me
            <br />
            because I wrote this.
          </h2>

          <p>
            I want you to believe me because, with time, my actions show you
            that I have changed.
          </p>

          <p>
            I know that I cannot undo the moments where I hurt you.
            I cannot erase the things I said or the way I behaved.
          </p>

          <p>
            But I can choose what kind of husband I am from this moment forward.
          </p>

          <p>
            I can choose patience.
            <br />
            I can choose kindness.
            <br />
            I can choose respect.
            <br />
            I can choose you.
          </p>

          <p>
            Himasree, I am truly sorry.
          </p>

          <p>
            I love you.
            <br />
            I respect you.
            <br />
            And I want to spend my life becoming the husband you deserve.
          </p>

          <p>
            I don't expect this page to fix everything.
            <br />
            I just hope it helps you understand what is in my heart.
          </p>

          <button
            className="read-again"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Read it again ❤️
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;