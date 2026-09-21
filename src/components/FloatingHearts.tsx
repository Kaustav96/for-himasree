const hearts = Array.from({ length: 15 });

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 17) % 100}%`,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${10 + (index % 5)}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}