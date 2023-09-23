import Filter from "./filter/Filter";
import ManageFiltersButton from "./filter/ManageFiltersButton";
import Sort from "./sort/Sort";

interface Params {
  searchParams: { filter: string };
  catagories: { name: string }[];
  sortMethod: string;
  userId: string;
  projectCatagories: string[];
}
export default function Toolbar({
  searchParams,
  catagories,
  sortMethod,
  userId,
  projectCatagories,
}: Params) {
  const catagoryNames = catagories.map((catagory) => catagory.name);

  return (
    <>
      <div className="flex gap-[24px] items-center">
        <Filter filters={catagories} searchParams={searchParams} />
        <Sort userId={userId} currentSortMethod={sortMethod} />
      </div>
      <ManageFiltersButton
        userId={userId}
        catagories={catagoryNames}
        projectCatagories={projectCatagories}
      />
    </>
  );
}
