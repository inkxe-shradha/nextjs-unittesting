import EcomFooter from '@/components/e-commerce/layouts/Footer'
import EcomHeader from '@/components/e-commerce/layouts/Header'

export const metadata = {
    title: 'E-commerce Site',
    description: 'Your site ready with testing.',
}
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <EcomHeader />
            {children}
            <EcomFooter />
        </>
    )
}

export default Layout
