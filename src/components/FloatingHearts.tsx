const hearts = Array.from({ length: 12 });

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 23) % 100}%`,
            animationDelay: `${index * 1.7}s`,
            animationDuration: `${12 + (index % 4) * 2}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}