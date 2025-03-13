"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "./Breadcrumb";
import { IconChevronLeft } from '@tabler/icons-react'

const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex justify-between w-full md:w-1/2 items-center">
      <button onClick={handleBack} className="flex cursor-pointer text-blue-400">
        <IconChevronLeft /> Back
      </button>
      <Breadcrumb />
    </div>
  );
};

export default BackButton;
