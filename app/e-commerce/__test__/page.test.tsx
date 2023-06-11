import { render, screen, within } from '@/test-utils'
import { act } from 'react-dom/test-utils'
import Page from '../page'

describe('E-comm Home page', () => {
    it('Should have the main sections', async () => {
        await act(async () => {
            render(await Page())
        })
        const sectionEle = await screen.findByRole('main')
        expect(sectionEle).toBeInTheDocument()
    })

    it('Should have render the product list', async () => {
        await act(async () => {
            render(await Page())
        })
        const allProducts = screen.getByRole('list', { name: /products/i })
        const { getAllByRole } = within(allProducts)
        const listItems = getAllByRole('listitem')
        expect(listItems).toHaveLength(2)
    })
})
