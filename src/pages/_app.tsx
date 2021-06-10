import './styles/global.scss'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from "../stores/authContext"
import Header from "../components/Header"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </AuthContextProvider>
    )
}
export default MyApp
