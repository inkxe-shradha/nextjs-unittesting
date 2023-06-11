import { render, screen } from '@/test-utils'
import Layout from '../layout'
describe('E-comm Layout page', () => {
    it('Should have the header', () => {
        render(
            <Layout>
                <p>Render Ele</p>
            </Layout>
        )
        const headerEle = screen.getByRole('navigation')
        expect(headerEle).toBeInTheDocument()
    })

    it('Should have the footer', () => {
        render(
            <Layout>
                <p>Render Ele</p>
            </Layout>
        )
        const footerEle = screen.getByTestId('footer')
        expect(footerEle).toBeInTheDocument()
    })
})
