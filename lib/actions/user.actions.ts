'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';

import { connectToDB } from '../mongoose';

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface UpdateT {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  onboarded: boolean;
  path?: string;
}

export async function updateUser({
  userId,
  username,
  firstName,
  lastName,
  image,
  onboarded,
  path,
}: UpdateT): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username,
        firstName,
        lastName,
        image,
        onboarded,
      },
      { upsert: true }
    );

    if (path) {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function updateCatagories(
  userId: string,
  catagories: { name: string }[],
  path: string
) {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { _id: userId },
      { catagories },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to add catagory: ${error.message}`);
  }
}

export async function setSortMethod(userId: string, sortMethod: string, path: string) {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { _id: userId },
      { sortMethod },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to set sort method: ${error.message}`);
  }
}