import Image from 'next/image';
import styles from './page.module.sass'

export default function Home() {
  return (
      <main className={styles.MainContainer}>
        <div className={styles.Card}>
          <div className={styles.Card__imageContainer}>
            <Image
              src='/images/illustration-article.svg'
              alt='illustration-article'
              fill
            />
          </div>
          <div className={styles.Card__description}>
            <span className={styles.Card__description__learningText}>
              Learning
            </span>
            <h4 className={styles.Card__description__publishDate}>Published 21 Dec 2023</h4>
            <h1 className={styles.Card__description__title}>HTML & CSS foundations</h1>
            <p className={styles.Card__description__description}>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className={styles.Card__author}>
              <Image
                src={'/images/image-avatar.webp'}
                alt='image avatar'
                width={32}
                height={32} 
              />
              <h3>Greg Hooper</h3>
            </div>
          </div>
        </div>
      </main>
  );
}
