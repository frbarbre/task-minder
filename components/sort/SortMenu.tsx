import { setSortMethod } from '@/lib/actions/user.actions';
import SortMethod from './SortMethod';

export default function SortMenu({
  userId,
  currentSortMethod,
}: {
  userId: string;
  currentSortMethod: string;
}) {
  return (
    <article className="absolute bottom-[-130px] shadow-dark rounded-[15px] right-0 bg-white px-[20px] py-[14px] flex flex-col gap-[10px]">
      <p className="text-[14px]">Sort By:</p>
      <SortMethod currentSortMethod={currentSortMethod} method="dueDate" name="Date" userId={userId} />
      <SortMethod currentSortMethod={currentSortMethod} method="priority" name="Priority" userId={userId} />
    </article>
  );
}
