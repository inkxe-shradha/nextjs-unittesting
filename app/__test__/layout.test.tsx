import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

describe('Root Layout component', () => {
    it('Should have render the element that been passed', () => {
        render(
            <RootLayout>
                <h1>My Heading</h1>
            </RootLayout>
        )
        const headingContent = screen.getByRole('heading', {
            name: /my heading/i,
        })
        expect(headingContent).toBeInTheDocument()
    })
})
