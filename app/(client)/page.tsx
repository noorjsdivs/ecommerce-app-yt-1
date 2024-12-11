import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import ProductList from "@/components/ProductList";
import { getAllCategories, getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  const sales = await getSale();

  return (
    <Container className="pb-10">
      <DiscountBanner sales={sales} />
      <ProductList title={true} products={products} categories={categories} />
    </Container>
  );
}
