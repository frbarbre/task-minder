'use client';

import { createTask } from '@/lib/actions/tasks.actions';
import Button from './Button';
import { updateCatagories } from '@/lib/actions/user.actions';

export default function TestCreate({ userId }: { userId: string }) {
  async function handleCreate() {
    await createTask({
      author: userId,
      title: 'Test Task',
      description: 'This is a test task',
      catagory: 'fitness',
      dueDate: '2023-10-20',
      priority: 3,
      path: '/',
    });
  }

  async function handleCatagories() {
    await updateCatagories(
      userId,
      [
        {
          name: 'work',
        },
        {
          name: 'personal',
        },
        {
          name: 'fitness',
        }
      ],
      '/'
    );
  }

  return (
    <Button
      text="Create"
      hasArrow
      handleClick={handleCreate}
      maxWidth="max-w-[400px]"
    />
  );
}
