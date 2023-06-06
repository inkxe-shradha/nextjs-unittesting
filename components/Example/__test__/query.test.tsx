import user from '@testing-library/user-event'
import { render, screen } from '../../../test-utils'
import Query from '../Query'

describe('React Query Testing', () => {
    describe('When the toggle mode is off', () => {
        it('Should render the Toggle Button', () => {
            render(<Query />)
            const toggleButton = screen.getByRole('button', {
                name: 'Toggle',
            })
            expect(toggleButton).toBeInTheDocument()
        })

        /**
         * queryBy and queryAllBy
         * * It will not throw the error if no element is matched.
         */
        it('Should not render the ListItem', () => {
            render(<Query />)
            const listElement = screen.queryByRole('listbox')
            expect(listElement).not.toBeInTheDocument()
        })

        /**
         * Async operation. It need to be wait for the element to be rendered
         *
         * * findBy or findAllBy 0- Return a promise when a element is found which matches the given query
         * * The promise will be rejected if no element is found, or more than one element is found after the given intervals or finished API calls.
         */
        it('Should render the List Elements after 500ms', async () => {
            render(<Query />)
            const listElement = await screen.findByRole(
                'list',
                {},
                { timeout: 1500 }
            )
            expect(listElement).toBeInTheDocument()
        })

        it('Should have contain the parent wrapper test', () => {
            render(<Query />)
            const bodyText = screen.getAllByText('Parent content')
            console.log(process.env.NEXT_PUBLIC_SPACE_ID)

            expect(bodyText).toHaveLength(2)
        })
    })

    describe('On Clickme Button clicked', () => {
        it('Should trigger toggleClick me button', async () => {
            user.setup()
            const toggleClick = jest.fn()
            render(<Query toggleClick={toggleClick} />)
            const buttonEle = screen.getByRole('button', { name: 'Click Me' })
            await user.click(buttonEle)
            expect(toggleClick).toHaveBeenCalled()
        })
    })
})
