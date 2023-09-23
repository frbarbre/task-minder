import Image from 'next/image';
import Link from 'next/link';

export default function FilterButton({
  filter,
  searchParams,
}: {
  filter: string;
  searchParams: { filter: string };
}) {
  return (
    <Link
      className={`relative h-[30px] px-[17px] flex items-center justify-center  
      ${
        filter === 'all' && !searchParams.filter
          ? 'text-white'
          : searchParams.filter === filter
          ? 'text-white'
          : `text-primary hover:opacity-80`
      }
      `}
      href={filter === 'all' ? '/' : `/?filter=${filter}`}
    >
      <p className='capitalize text-[13px]'>{filter}</p>
      <Image
        src={
          filter === 'all' && !searchParams.filter
            ? '/filterbutton-active.svg'
            : searchParams.filter === filter
            ? '/filterbutton-active.svg'
            : `/filterbutton.svg`
        }
        alt="filter button"
        width={1000}
        height={1000}
        className="w-full h-[30px] z-[-1] absolute inset-0"
      />
    </Link>
  );
}
