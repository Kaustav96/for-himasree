import { ChevronDown, Heart } from "lucide-react";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("intro")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-content">
        <div className="heart-icon">
          <Heart size={24} fill="currentColor" />
        </div>

        <span className="eyebrow">
          A letter from Kaustav
        </span>

        <h1>
          I'm Sorry,
          <br />
          <em>Himasree.</em>
        </h1>

        <p className="hero-subtitle">
          From Kaustav, with all my heart.
        </p>

        <button
          className="hero-button"
          onClick={scrollDown}
        >
          Read my heart
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="scroll-indicator">
        <span>scroll slowly</span>
      </div>
    </section>
  );
}