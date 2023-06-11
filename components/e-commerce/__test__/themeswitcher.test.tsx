import { render, screen } from '@/test-utils'
import { ThemeSwitcher } from '../ThemeSwitcher'
import user from '@testing-library/user-event'

describe('Theme-switcher', () => {
    it('Should have the switcher button', () => {
        render(<ThemeSwitcher />)
        const buttonEle = screen.getByRole('button')
        expect(buttonEle).toBeInTheDocument()
    })

    it('It should have the light icon on load the page', () => {
        render(<ThemeSwitcher />)
        const buttonEle = screen.getByTestId('theme-toggle-dark-icon')
        expect(buttonEle).toBeInTheDocument()
    })

    it('It should have the dark icon on click the button', async () => {
        user.setup()
        render(<ThemeSwitcher />)
        const buttonEle = screen.getByRole('button')
        await user.click(buttonEle)
        const svgIcon = screen.getByTestId('theme-toggle-light-icon')
        expect(svgIcon).toBeInTheDocument()
    })
})
