import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import PriceView from "@/components/PriceView";
import { getProductBySlug } from "@/sanity/helpers";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { LuStar } from "react-icons/lu";
import { RxBorderSplit } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";

// export const dynamic = "force-static";
// export const revalidate = 60;

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Container className="flex flex-col md:flex-row gap-10 py-10">
        {product?.image && (
          <div className="w-full md:w-1/2 h-auto border border-darkBlue/20 shadow-md rounded-md group overflow-hidden">
            <Image
              src={urlFor(product?.image).url()}
              alt="productImage"
              width={700}
              height={700}
              priority
              className="w-full max-h-[550px] object-cover group-hover:scale-110 hoverEffect rounded-md"
            />
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <p className="text-4xl font-bold mb-2">{product?.name}</p>
            <div className="flex items-center gap-2">
              <div className="text-lightText flex items-center gap-.5 text-sm">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isLastStar = index === 4;
                  return (
                    <LuStar
                      fill={!isLastStar ? "#fca99b" : "transparent"}
                      key={index}
                      className={`${isLastStar ? "text-gray-500" : "text-lightOrange"}`}
                    />
                  );
                })}
              </div>
              <p className="text-sm font-medium text-gray-500">{`(25 reviews)`}</p>
            </div>
          </div>
          <PriceView
            price={product?.price}
            discount={product?.discount}
            label={product?.label}
            className="text-lg font-bold"
          />
          {product?.stock && (
            <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
              In Stock
            </p>
          )}

          <p className="text-base text-gray-800">
            <span className="bg-black text-white px-3 py-1 text-sm font-semibold rounded-md mr-2">
              20
            </span>{" "}
            People are viewing this right now
          </p>

          <p className="text-sm text-gray-600 tracking-wide">
            {product?.description}
          </p>
          <AddToCartButton product={product} />
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <RxBorderSplit className="text-lg" />
              <p>Compare color</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FaRegQuestionCircle className="text-lg" />
              <p>Ask a question</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <TbTruckDelivery className="text-lg" />
              <p>Delivery & Return</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FiShare2 className="text-lg" />
              <p>Share</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <div className="border border-darkBlue/20 text-center p-3 hover:border-darkBlue hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Free Shipping
              </p>
              <p className="text-sm text-gray-500">
                Free shipping over order $120
              </p>
            </div>
            <div className="border border-darkBlue/20 text-center p-3 hover:border-darkBlue hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Flexible Payment
              </p>
              <p className="text-sm text-gray-500">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
