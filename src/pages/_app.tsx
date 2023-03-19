import { ContextDataProvider } from '@/context/DataContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--prompt",
  weight: ['400', '500', '700', '900']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextDataProvider>
      <main className={`${prompt.variable} font-wdc`}>
        <Component {...pageProps} />
      </main>
    </ContextDataProvider>
  )
}
