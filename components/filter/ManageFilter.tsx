import ActionButton from "../shared/ActionButton";

interface Params {
  filter: string;
  handleDelete: (name: string) => void;
  projectCatagories: string[];
  error: { isError: boolean; message: string; element: string[] };
}

export default function ManageFilter({
  filter,
  handleDelete,
  projectCatagories,
  error,
}: Params) {
  return (
    <article className="w-full rounded-[15px] bg-white shadow-dark p-[24px] flex justify-between items-center">
      <div>
        <h3 className="capitalize text-[19px] font-semibold">{filter}</h3>
        {projectCatagories.includes(filter) && error.isError && error.element.includes(filter) && (
          <p className="text-[13px] text-pale-red">
            {error.message}
          </p>
        )}
      </div>
      <ActionButton
        activeIcon="/trash.svg"
        inactiveIcon="/trash.svg"
        color={
          projectCatagories.includes(filter)
            ? "shadow-slate-300/40 bg-slate-300"
            : "shadow-pale-red/40 bg-pale-red"
        }
        handleClick={() => handleDelete(filter)}
      />
    </article>
  );
}
