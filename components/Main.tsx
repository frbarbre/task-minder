import TestClear from "./TestClear";
import TestCreate from "./TestCreate";
import { Task, UserT } from "@/types";
import TestTask from "./TestTask";
import Toolbar from "./Toolbar";

export default function Main({
  userInfo,
  tasks,
  searchParams,
}: {
  userInfo: UserT;
  tasks: Task[];
  searchParams: { filter: string };
}) {
  if (userInfo.sortMethod === "dueDate") {
    tasks.sort((a, b) => {
      if (a.dueDate > b.dueDate) return 1;
      if (a.dueDate < b.dueDate) return -1;
      return 0;
    });
  } else if (userInfo.sortMethod === "priority") {
    tasks.sort((a, b) => {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    });
  }

  const projectCatagories = tasks.map((task) => task.catagory);

  return (
    <>
      <Toolbar
        catagories={userInfo.catagories}
        searchParams={searchParams}
        userId={userInfo._id}
        sortMethod={userInfo.sortMethod}
        projectCatagories={projectCatagories}
      />
      {tasks?.length !== 0 && (
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <>
              {!searchParams.filter ? (
                <TestTask
                  key={task._id.toString()}
                  taskId={task._id.toString()}
                  title={task.title}
                  isCompleted={task.isDone}
                  priority={task.priority}
                  dueDate={task.dueDate}
                  catagory={task.catagory}
                />
              ) : (
                task.catagory === searchParams.filter && (
                  <TestTask
                    key={task._id.toString()}
                    taskId={task._id.toString()}
                    title={task.title}
                    isCompleted={task.isDone}
                    priority={task.priority}
                    dueDate={task.dueDate}
                    catagory={task.catagory}
                  />
                )
              )}
            </>
          ))}
        </div>
      )}
      <TestClear userId={userInfo._id.toString()} />
      <TestCreate userId={userInfo._id.toString()} />
    </>
  );
}
