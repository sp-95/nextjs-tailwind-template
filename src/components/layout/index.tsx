import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export interface LayoutProps {
  children: React.ReactElement | React.ReactElement[]
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children, title, description } = props

  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Sidebar />
      <div className="flex flex-col min-h-screen w-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
