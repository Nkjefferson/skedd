import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skedd</title>
        <meta name="description" content="Scheduling with a purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '} 
          <Link href="/dashboard">
            Skedd!
          </Link>
        </h1>

        <h2 className={styles.description}>
          Get started by logging in!
        </h2>

      </main>
      <Footer />

    </div>
  )
}
