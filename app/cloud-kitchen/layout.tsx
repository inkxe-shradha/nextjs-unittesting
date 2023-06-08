import GraphQLClientProvide from '@/components/cloud-kitchen/Providers/GraphQLClientProvide'
import { KitchenFooter } from '@/components/cloud-kitchen/layouts/KitchenFooter'
import { KitchenHeader } from '@/components/cloud-kitchen/layouts/KitchenHeader'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <KitchenHeader />
            <GraphQLClientProvide>{children}</GraphQLClientProvide>
            <KitchenFooter />
        </>
    )
}

export default Layout
