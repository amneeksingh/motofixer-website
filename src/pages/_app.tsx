import type { AppProps } from 'next/app'
import "../app/globals.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>MotoFixer - Comming Soon</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}