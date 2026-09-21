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
          <span className="small-label">If I could say one thing...</span>

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
            I am sorry, Himasree.
          </p>

          <p>
            I love you.
            <br />
            I respect you.
            <br />
            And I want to spend my life becoming the husband you deserve.
          </p>

          <button
            className="read-again"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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