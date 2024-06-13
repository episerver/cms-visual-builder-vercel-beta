import { type PropsWithChildren } from "react"
import type { Metadata } from "next"

// Components
import { MoseyBankHeader } from '@/components/header'
import { MoseyBankFooter } from '@/components/footer'

// Styling
import { Figtree } from "next/font/google"
import "./globals.scss"

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mosey Bank - An Optimizely Demo Company",
    description: "An Optimizely demo website",
    keywords: "Mosey bank, Mosey, Optimizely, Demo"
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>

export default function RootLayout({ children }: RootLayoutProps) {
    return <html lang="en">
        <body className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white`}>
            <div className="flex min-h-screen flex-col justify-between">
                <MoseyBankHeader />
                {children}
                <MoseyBankFooter />
            </div>
        </body>
    </html>
}
