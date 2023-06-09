'use client'

import { ThemeProvider } from 'next-themes'

const CustomThemeProvide: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default CustomThemeProvide
