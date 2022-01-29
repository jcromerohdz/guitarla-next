import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div >
      <Layout
        page={'Home'}
      >
        <h1 className='headings'>From Index</h1>
      </Layout>

    </div>
  )
}
