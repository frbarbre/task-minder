import Image from 'next/image';

export default function ActionButton({
  color,
  activeIcon,
  inactiveIcon,
  isActive,
  handleClick,
}: {
  color: string;
  activeIcon: string;
  inactiveIcon: string;
  isActive?: boolean;
  handleClick?: () => void;
}) {
  return (
    <button onClick={handleClick} className={`${color} w-[34px] h-[34px] rounded-full shadow-action flex items-center justify-center`}>
      <Image
        src={isActive ? activeIcon : inactiveIcon}
        alt="action icon"
        width={14}
        height={14}
      />
    </button>
  );
}
