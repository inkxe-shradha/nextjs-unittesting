import { client } from "@/components/cloud-kitchen/Providers/apolloClient";
import { homePageQuery } from "./query/homepage";

export const getHomePageBanner = () => client.query({
    query: homePageQuery
})