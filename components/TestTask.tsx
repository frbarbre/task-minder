'use client';

import { deleteTasks, setTaskDone } from '@/lib/actions/tasks.actions';

export default function TestTask({
  isCompleted,
  taskId,
  title,
  priority,
  dueDate,
  catagory,
}: {
  isCompleted: boolean;
  taskId: string;
  title: string;
  priority: number;
  dueDate: string;
  catagory: string;
}) {
  async function handleDelete() {
    await deleteTasks(taskId, '/');
  }

  async function handleCompleted() {
    await setTaskDone({ isDone: !isCompleted, taskId: taskId, path: '/' });
  }

  return (
    <div className={isCompleted ? 'text-red-600' : 'text-green-600'}>
      <div onClick={handleCompleted}>Task Title: {title}</div>
      <div>Task ID: {taskId}</div>
      <div onClick={handleDelete}>Delete</div>
      <div>{priority}</div>
      <div>{dueDate}</div>
      <div>{catagory}</div>
    </div>
  );
}
