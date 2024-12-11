import { Category, Product } from "@/sanity.types";
import React from "react";
import ProductGrid from "./ProductGrid";
import Categories from "./Categories";
interface Props {
  products: Product[];
  categories: Category[];
  title?: boolean;
}
const ProductList = ({ products, categories, title }: Props) => {
  return (
    <div>
      <Categories categories={categories} />
      {title && (
        <div className="pb-5">
          <h2 className="text-2xl font-semibold text-gray-600">
            Day of the <span className=" text-lightBlue">Deal</span>
          </h2>
          <p className="text-sm text-gray-500 font-thin">
            Don&rsquo;t wait. The time will never be just right.
          </p>
        </div>
      )}

      <ProductGrid products={products} />
    </div>
  );
};

export default ProductList;
