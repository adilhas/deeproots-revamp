type Props = {
  text: string;
  delayOffset: number;
};

export default function AnimatedWord({ text, delayOffset }: Props) {
  return (
    <span className="inline-block mr-1">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in"
          style={{ animationDelay: `${(i + delayOffset) * 30}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
