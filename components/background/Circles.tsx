export default function Circles({
  color,
  size,
  position,
}: {
  color: string;
  size: string;
  position: string;
}) {
  return (
    <div
      className={`${size} ${color} ${position} absolute aspect-square rounded-full bg-gradient-radial from-10% to-70% to-white/0`}
    />
  );
}
