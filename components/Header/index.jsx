import Link from 'next/link';

import { useAppContext } from 'contexts/AppContext';
import Cross from 'public/cross.svg';
import Menu from 'public/menu.svg';
import Logo from 'public/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { menu, toggleContactModal, toggleMenu } = useAppContext();

  return (
    <header className={`container ${styles.header}`}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={`${styles.nav} ${menu ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className={styles.link}>Portfolio</a>
            </Link>
          </li>
          <li>
            <a className={styles.link}>Contáctame</a>
          </li>
        </ul>
      </nav>
      <div className={styles.trigger}>
        <button className={styles.burguerToggler} onClick={toggleMenu}>
          {menu && <Cross className={styles.cross} />}
          {!menu && <Menu className={styles.menu} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
