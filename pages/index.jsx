import Head from 'next/head'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
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
