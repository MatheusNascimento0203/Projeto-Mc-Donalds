import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface RestauranteMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethod = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod);
};

const RestauranteMenuPage = async ({
  params,
  searchParams,
}: RestauranteMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  if (!isConsumptionMethod(consumptionMethod)) {
    return notFound();
  }

  return (
    <h1>
      {slug} {consumptionMethod}
    </h1>
  );
};

export default RestauranteMenuPage;
