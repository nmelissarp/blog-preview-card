import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import 'app/sass/globals.sass'

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['500', '800'],
})

export const metadata: Metadata = {
  title: 'Blog Preview Card',
  description: 'Blog Preview Card',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable}`}>{children}</body>
    </html>
  )
}
