import SkeletonCard from "./card";

export default function MoviesCardSkeleton() {
  const skeletonCardsArray: number[] = Array(20).fill(0);

  const cards = skeletonCardsArray.map((_, index: number) => {
    return <SkeletonCard key={index} />;
  });

  return <>{cards}</>;
}
