import Head from 'next/head'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div className='bg-gray-900 h-screen'>
      <Head>
        <title>tell.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <p>Home</p>
      </main>

    </div>
  )
}
