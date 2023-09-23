import { setSortMethod } from '@/lib/actions/user.actions';

export default function SortMethod({
  method,
  name,
  userId,
  currentSortMethod,
}: {
  method: string;
  name: string;
  userId: string;
  currentSortMethod: string;
}) {
  async function handleSortMethod(sortMethod: string) {
    await setSortMethod(userId, sortMethod, '/');
  }
  return (
    <button
      className="font-semibold text-primary flex gap-[22px] items-center"
      onClick={() => handleSortMethod(method)}
    >
      <span className="w-[80px] block text-left">{name}</span>
      <strong className="w-[20px] h-[20px] rounded-full border-primary border-[2px] flex justify-center items-center p-[4px]">
        {currentSortMethod === method && (
          <span className="w-full h-full rounded-full bg-primary block" />
        )}
      </strong>
    </button>
  );
}
