import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Footer from '../components/footer'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skedd</title>
        <meta name="description" content="Scheduling with a purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Dashboard
      </h1>
      <h2 className={styles.description}>
        Select the task chart you would like to view
      </h2>
      <hr />

      <main className={styles.main}>
        <div className={styles.board}>
          <div className={styles.grid}>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a second card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card it has alot of text I wasn't prepared for</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a third card</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.card}>
                <h2>View More >>></h2>
              </div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />

    </div>
  )
}
