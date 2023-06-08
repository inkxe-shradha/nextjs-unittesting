import { createClient } from "contentful";

const contentFulClient = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
})

export default contentFulClient;