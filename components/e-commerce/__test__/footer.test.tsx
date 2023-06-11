import { render, screen } from '@/test-utils'
import EcomFooter from '../layouts/Footer'

describe('Footer element', () => {
    it('Should have the list items', () => {
        render(<EcomFooter />)
        const footerEle = screen.getAllByRole('listitem')
        expect(footerEle).toHaveLength(4)
    })

    it('Should have the copyright box', () => {
        render(<EcomFooter />)
        const spanEle = screen.getByTestId('copy-right')
        expect(spanEle).toBeInTheDocument()
    })
})
