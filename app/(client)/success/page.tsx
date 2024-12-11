"use client";

import useCartStore from "@/store";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearCart = useCartStore((state) => state.resetCart);

  useEffect(() => {
    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber, clearCart]);

  return (
    <div className="py-10 md:py-20 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
        >
          <Check className="text-teal-600 w-12 h-12" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Order Confirmed!
        </h1>
        <div className="space-y-4 mb-8 text-left">
          <p className="text-gray-600">
            Thank you for your purchase. We&rsquo;re processing your order and
            will ship it soon. A confirmation email with your order details will
            be sent to your inbox shortly.
          </p>
          <p className="text-gray-600">
            Order Number:{" "}
            <span className="text-black font-semibold">{orderNumber}</span>
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-green-800 mb-2">
            What&rsquo;s Next?
          </h2>
          <ul className="text-green-700 text-sm space-y-1">
            <li>Check your email for order confirmation</li>
            <li>We&rsquo;ll notify you when your order ships</li>
            <li>Track your order status anytime</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link
            href="/orders"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <Package className="w-5 h-5 mr-2" />
            Orders
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
