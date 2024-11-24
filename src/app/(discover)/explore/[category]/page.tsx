import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { onGetExploreGroup } from "@/src/actions/groups";
import ExplorePageContent from "../_components/explore-content";

const ExploreCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const query = new QueryClient();

  //La recherche par category en cliquant sur business ou fitness bref ce qui scroll
  await query.prefetchQuery({
    queryKey: ["groups"],
    queryFn: () => onGetExploreGroup(params.category, 0),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <ExplorePageContent layout="LIST" category={params.category} />
    </HydrationBoundary>
  );
};

export default ExploreCategoryPage;
