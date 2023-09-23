"use client";

import Modal from "../shared/Modal";
import { useState } from "react";
import ManageFilters from "./ManageFilters";

export default function ManageFiltersButton({
  userId,
  catagories,
  projectCatagories,
}: {
  userId: string;
  catagories: string[];
  projectCatagories: string[];
}) {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalActive(true)}
        className="mt-[15px] border-b-[1.5px] pb-[1px] text-[13px] hover:text-primary hover:border-b-primary transition-colors border-b-primary-light text-primary-light"
      >
        Manage Catagories
      </button>
      <Modal
        layer="top"
        isActive={isModalActive}
        setIsActive={setIsModalActive}
      >
        <ManageFilters
          setIsActive={setIsModalActive}
          userId={userId}
          catagoryNames={catagories}
          projectCatagories={projectCatagories}
        />
      </Modal>
    </>
  );
}
