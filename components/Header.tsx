import Link from "next/link";
import React from "react";
import Form from "next/form";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Container from "./Container";
import Image from "next/image";
import logo from "@/images/logo.png";
import CartIcon from "./CartIcon";
import { BsBasket } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { getMyOrders } from "@/sanity/helpers";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-b-gray-200 py-1">
      <Container>
        <header className="flex gap-2 flex-wrap justify-between items-center py-2">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-24" priority />
          </Link>
          <Form
            action="/search"
            className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
          >
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-gray-200 w-full max-w-4xl rounded-md hoverEffect"
            />
          </Form>
          <div className="flex items-center space-x-4 sm:mt-0 flex-1 sm:flex-none">
            <CartIcon />
            {/* User icons */}
            <ClerkLoaded>
              <SignedIn>
                <Link
                  href={"/orders"}
                  className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
                >
                  <BsBasket className="text-2xl text-darkBlue" />
                  <div className="flex flex-col">
                    <p className="text-xs">
                      <span className="font-semibold">
                        {orders && orders?.length > 0 ? orders?.length : 0}
                      </span>{" "}
                      items
                    </p>
                    <p className="font-semibold">Orders</p>
                  </div>
                </Link>
              </SignedIn>

              {user ? (
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                  <UserButton />
                  <div className="text-xs">
                    <p className="text-gray-400">Welcome Back</p>
                    <p className="font-bold">{user?.fullName}</p>
                  </div>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md cursor-pointer hover:shadow-none hoverEffect">
                    <FiUser className="text-2xl text-darkBlue" />
                    <div className="flex flex-col">
                      <p className="text-xs">Account</p>
                      <p className="font-semibold">Login</p>
                    </div>
                  </div>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
