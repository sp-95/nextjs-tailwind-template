import Layout from '@/components/layout'
import Home from '@components/home'
import React from 'react'

export default function HomePage(): React.ReactElement {
  return (
    <Layout title="Create Next App" description="Generated by create next app">
      <Home />
    </Layout>
  )
}
