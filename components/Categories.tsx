import { Category } from "@/sanity.types";
import React from "react";
import CategorySelector from "./ui/category-selector";
interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className="py-5">
      <CategorySelector categories={categories} />
    </div>
  );
};

export default Categories;
