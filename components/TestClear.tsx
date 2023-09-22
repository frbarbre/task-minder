'use client';

import { clearCompletedTasks } from '@/lib/actions/tasks.actions';

export default function TestClear({ userId }: { userId: string }) {
  async function handleClear() {
    await clearCompletedTasks(userId, '/');
  }

  return <button onClick={handleClear}>Clear Completed</button>;
}
