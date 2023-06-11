import '@testing-library/jest-dom/extend-expect'
import './__mocks__/routerMock'
// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
// src/setupTests.js
import { server } from './mocks/server'
// Establish API mocking before all tests.
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
    server.listen()
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
