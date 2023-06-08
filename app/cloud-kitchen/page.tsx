import Carousal from '@/components/cloud-kitchen/layouts/Carousal'
import { getHomePageBanner } from '@/server/homepage.api'

export const metadata = {
    title: 'Cloud Kitchen',
    description: 'Home like test in the Cloud Kitchen',
}

const page = async () => {
    const response = await getHomePageBanner()
    const {
        data: {
            kitchenCarouselCollection: { items },
        },
    } = response
    console.log(items)

    return (
        <div>
            New
            <Carousal carousal={items} />
        </div>
    )
}

export default page
