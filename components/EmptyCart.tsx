import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import emptyCart from "@/images/emptyCart.png";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="bg-white flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block"
        >
          <ShoppingCart size={64} className="text-gray-400 mx-auto" />
        </motion.div>
        <Image
          src={emptyCart}
          alt="Empty shopping bag"
          width={200}
          height={200}
          className="mx-auto rounded-lg shadow-md"
        />
        <h2 className="text-3xl font-bold text-gray-800">
          Your cart is empty!
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Looks like you haven&rsquo;t added anything to your cart yet. Explore
          our products and find something you love!
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
