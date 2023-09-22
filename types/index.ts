export interface User {
  _id: string;
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  onboarded: boolean;
  tasks: string[];
  catagories: {
    name: string;
  }[];
  sortMethod: string;
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: number;
  author: string;
  catagory: string;
  isDone: boolean;
}
