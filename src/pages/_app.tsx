import type { AppProps } from 'next/app';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={"min-h-screen flex flex-col"}>
            {/* Компонент страницы */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;