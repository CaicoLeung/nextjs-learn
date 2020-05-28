import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import CommonHeader from '../components/_header'
import '../styles/global.css'

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <CommonHeader/>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}
