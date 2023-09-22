import Link from 'next/link';

export default function FilterButton({ filter }: { filter: string }) {
  return (
    <Link
      className="block"
      href={filter === 'all' ? '/' : `/?filter=${filter}`}
    >
      {filter}
    </Link>
  );
}
