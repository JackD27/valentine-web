export function HeartRain() {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10%] text-3xl animate-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};