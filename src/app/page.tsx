import Image from 'next/image'
import styles from './page.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__image}></div>
        <section className={styles.container__content}>
          <span>Learning</span>
          <p className={styles.date}>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </section>
        <div className={styles.container__author}>
          <Image
            src={'/images/image-avatar.webp'}
            width={32}
            height={32}
            alt="Avatar"
          />
          <p>Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}
