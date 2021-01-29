import Head from 'next/head'
import Menu from '../components/Menu'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className='bg-gray-900 h-screen'>
      <Head>
        <title>tell.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <Chat />
      </main>

    </div>
  )
}
