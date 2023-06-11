import { render, screen } from '@/test-utils'
import EcomHeader from '../layouts/Header'

describe('Commerce Header page', () => {
    it('Should have the 6 last box', () => {
        render(<EcomHeader />)
        const headerElement = screen.getAllByRole('listitem')
        expect(headerElement).toHaveLength(6)
    })
})
