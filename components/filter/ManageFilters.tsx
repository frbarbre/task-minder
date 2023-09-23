import Image from "next/image";
import { useState } from "react";
import ActionButton from "../shared/ActionButton";
import { updateCatagories } from "@/lib/actions/user.actions";
import Button from "../shared/Button";
import ManageFilter from "./ManageFilter";
import { set } from "mongoose";

interface Params {
  setIsActive: (isActive: boolean) => void;
  userId: string;
  catagoryNames: string[];
  projectCatagories: string[];
}

export default function ManageFilters({
  setIsActive,
  userId,
  catagoryNames,
  projectCatagories,
}: Params) {
  const [catagories, setCatagories] = useState(catagoryNames);
  const [isAdding, setIsAdding] = useState(false);
  const [newCatagory, setNewCatagory] = useState("");
  const [hasEdited, setHasEdited] = useState(false);
  const [error, setError] = useState<{
    isError: boolean;
    message: string;
    element: string[];
  }>({
    isError: false,
    message: "",
    element: [],
  });

  function handleDelete(name: string) {
    if (projectCatagories.includes(name)) {
      setError({
        isError: true,
        message: "You can't delete a catagory that is in use",
        element: [...error.element, name],
      });
    } else {
      const newCatagories = catagories.filter((catagory) => catagory !== name);
      setCatagories(newCatagories);
      setHasEdited(true);
    }
  }

  function handleAdd() {
    const newCatagories = [...catagories, newCatagory.toLocaleLowerCase()];
    setCatagories(newCatagories);
    setNewCatagory("");
    setIsAdding(false);
    setHasEdited(true);
  }

  async function handleSubmit() {
    await updateCatagories(userId, catagories, "/");
    setHasEdited(false);
    setIsActive(false);
  }

  return (
    <section className="w-full flex flex-col gap-[28px]">
      <div className="w-full grid grid-cols-center items-center">
        <Image
          src={"/arrow-black.svg"}
          alt="back button"
          width={18}
          height={12}
          className="cursor-pointer rotate-180"
          onClick={() => setIsActive(false)}
        />
        <h2 className="text-[19px] font-semibold text-center">
          Manage Catagories
        </h2>
        <ActionButton
          handleClick={() => setIsAdding(true)}
          activeIcon="/plus.svg"
          inactiveIcon="/plus.svg"
          color="shadow-primary/40 bg-primary justify-self-end"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        {catagories.map((catagory) => (
          <ManageFilter
            filter={catagory}
            key={catagory}
            handleDelete={handleDelete}
            projectCatagories={projectCatagories}
            error={error}
          />
        ))}
        {isAdding && (
          <form
            onSubmit={handleAdd}
            className="w-full rounded-[15px] bg-white shadow-dark p-[24px] flex justify-between items-center"
          >
            <input
              type="text"
              value={newCatagory}
              onChange={(e) => setNewCatagory(e.target.value)}
              placeholder="Write New Catagory"
              className="capitalize text-[19px] font-semibold"
            />
            <ActionButton
              activeIcon="/checkmark.svg"
              inactiveIcon="/checkmark.svg"
              color="shadow-pale-green/40 bg-pale-green"
              type="submit"
            />
          </form>
        )}
      </div>
      <Button
        text="Apply Changes"
        handleClick={handleSubmit}
        isDisabled={hasEdited ? false : true}
      />
    </section>
  );
}
