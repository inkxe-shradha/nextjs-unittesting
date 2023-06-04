import { rest } from 'msw'

export const handlers = [
    rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (req, res, context) => {
            return res(
                context.status(200),
                context.json([
                    {
                        userId: 1,
                        id: 1,
                        title: 'delectus aut autem',
                        completed: false,
                    },
                    {
                        userId: 1,
                        id: 2,
                        title: 'quis ut nam facilis et officia qui',
                        completed: false,
                    },
                    {
                        userId: 1,
                        id: 3,
                        title: 'fugiat veniam minus',
                        completed: false,
                    },
                ])
            )
        }
    ),
]
