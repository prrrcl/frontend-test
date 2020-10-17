import { memo } from 'react';
import styles from './HeaderContent.module.scss';

function HeaderContent({ title, button, img, desc }) {
  return (
    <section className={styles.billboard}>
      <img src={img} />
      <div className={styles.intro}>
        <h1>{title}</h1>
        {desc && <p className={styles.description}>{desc}</p>}
        <a className={button.className} href={button.link}>
          {button.label}
        </a>
      </div>
    </section>
  )

}

export default memo(HeaderContent)