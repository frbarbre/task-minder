import FilterButton from './FilterButton';

export default function Filter({
  filters,
  searchParams,
}: {
  filters: { name: string }[];
  searchParams: { filter: string };
}) {
  return (
    <div className="flex gap-4 flex-1 flex-wrap">
      <FilterButton filter="all" searchParams={searchParams} />
      {filters.map((filter) => (
        <FilterButton filter={filter.name} searchParams={searchParams} />
      ))}
    </div>
  );
}
