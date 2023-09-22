import Main from '@/components/Main';
import { getTasks } from '@/lib/actions/tasks.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { Task, User } from '@/types';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Home({
  searchParams,
}: {
  searchParams: { filter: string };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo: User = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const tasks: Task[] = await getTasks(userInfo._id);

  return (
    <main>
      <Main tasks={tasks} userInfo={userInfo} searchParams={searchParams} />
    </main>
  );
}
