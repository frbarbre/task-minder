'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import Tasks from '../models/tasks.model';
import User from '../models/user.model';

export const getTasks = async (userId: string) => {
  try {
    await connectToDB();
    const messages = await Tasks.find({ author: userId });
    return messages;
  } catch (error: any) {
    throw new Error(`Failed to get tasks: ${error.message}`);
  }
};

interface CreateT {
  title: string;
  description: string;
  dueDate: string;
  priority: number;
  author: string;
  catagory: string;
  path: string;
}

export const createTask = async ({
  title,
  description,
  dueDate,
  priority,
  author,
  catagory,
  path,
}: CreateT) => {
  try {
    connectToDB();

    const createdTask = await Tasks.create({
      title,
      description,
      dueDate,
      priority,
      author,
      catagory,
    });

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { tasks: createdTask._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create task: ${error.message}`);
  }
};

export const deleteTasks = async (id: string, path: string) => {
  try {
    connectToDB();

    await Tasks.findByIdAndDelete(id);

    // Update User model
    await User.updateOne({ $pull: { tasks: id } });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete task: ${error.message}`);
  }
};

export async function setTaskDone({
  taskId,
  isDone,
  path,
}: {
  taskId: string;
  isDone: boolean;
  path: string;
}): Promise<void> {
  try {
    connectToDB();

    await Tasks.findOneAndUpdate(
      { _id: taskId },
      {
        isDone,
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to set task done: ${error.message}`);
  }
}

export async function clearCompletedTasks(id: string, path: string) {
  try {
    connectToDB();

    // Recursively delete child threads and their descendants
    await Tasks.deleteMany({ author: id, isDone: true });

    const userPost = await getTasks(id);

    // Update User model
    await User.updateMany({ tasks: [...userPost] });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete task: ${error.message}`);
  }
}

interface UpdateT {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  catagory: string;
  path: string;
  taskId: string;
}

export async function updateTask({
  title,
  description,
  dueDate,
  priority,
  catagory,
  path,
  taskId,
}: UpdateT) {
  try {
    connectToDB();

    await Tasks.findOneAndUpdate(
      { _id: taskId },
      {
        title,
        description,
        dueDate,
        priority,
        catagory,
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to update task: ${error.message}`);
  }
}
