import { render, screen } from '@testing-library/react'
import Home from '../page'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading')

        expect(heading).toHaveTextContent(/Welcome/i)
    })

    it('should render the searchbox', () => {
        render(<Home />)
        const searchbox = screen.getByRole('searchbox')
        expect(searchbox).toHaveAccessibleName('search')
    })
})
