import Illustration from '../../public/images/illustration-article.svg'

import Image from 'next/image'
import styles from './page.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__image}></div>
        <section className={styles.container__content}>
          <span>Learning</span>
          <h3>Published 21 Dec 2023</h3>
          <article>
            <h1>HTML & CSS foundations</h1>
            <p>
              These languages are used the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </article>
        </section>
        <div className={styles.container__author}>
          <Image
            src={'/images/image-avatar.webp'}
            width={40}
            height={40}
            alt="Avatar"
          />
          <h3>Greg Hooper</h3>
        </div>
      </div>
    </main>
  )
}
