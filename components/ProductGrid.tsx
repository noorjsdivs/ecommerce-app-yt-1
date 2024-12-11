"use client";
import { Product } from "@/sanity.types";
import React from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.map((product) => (
        <AnimatePresence key={product?._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProductCard key={product?._id} product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default ProductGrid;
