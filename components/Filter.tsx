import FilterButton from './FilterButton';

export default function Filter({ filters }: { filters: { name: string }[] }) {
  return (
    <div className="flex gap-4 text-primary">
      <FilterButton filter="all" />
      {filters.map((filter) => (
        <FilterButton filter={filter.name} />
      ))}
    </div>
  );
}
