import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import { getAllCategories, getProductsByCategory } from "@/sanity/helpers";
import React from "react";
interface Props {
  params: Promise<{ slug: string }>;
}

const CategoriesPage = async ({ params }: Props) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();
  return (
    <div className="flex flex-col items-center justify-top  bg-gray-100">
      <Container className="p-8 bg-white rounded-lg shadow-md mt-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          Search results for{" "}
          <span className="text-darkBlue">
            {slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Collection
          </span>
        </h1>
        <ProductList products={products} categories={categories} />
      </Container>
    </div>
  );
};

export default CategoriesPage;
