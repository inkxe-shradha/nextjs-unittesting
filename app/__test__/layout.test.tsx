import { render, screen } from '@/test-utils'
import RootLayout from '../layout'
import CustomThemeProvide from '@/components/ThemeProvider/ThemeProvide'

describe('Root Layout component', () => {
    it('Should have render the element that been passed', () => {
        render(
            <RootLayout>
                <h1>My Heading</h1>
            </RootLayout>,
            {
                wrapper: CustomThemeProvide,
            }
        )
        const headingContent = screen.getByRole('heading', {
            name: /my heading/i,
        })
        expect(headingContent).toBeInTheDocument()
    })
})
