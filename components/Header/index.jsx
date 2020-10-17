import Link from 'next/link';

import { useAppContext } from 'contexts/AppContext';
import Cross from 'public/cross.svg';
import Menu from 'public/menu.svg';
import Logo from 'public/logo.svg';
import styles from './Header.module.scss';
import ActiveLink from 'components/ActiveLink';
import { useEffect, useRef } from 'react';
import { Power3, TweenMax, CSSPlugin  } from 'gsap';

const C = CSSPlugin; 



const Header = () => {
  const { menu, toggleContactModal, toggleMenu } = useAppContext();

  const MenuRefs = useRef([])
  const firstRender = useRef(true)
  const background = useRef(null)
  const MenuElements = [
    {
      title: 'Home',
      link: '/'
    }, {
      title: 'Portfolio',
      link: '/portfolio'
    }, {
      title: 'Contáctame',
      action: () => {
        toggleContactModal()
        toggleMenu()
      }
    }
  ];
  useEffect(() => {
    if(!firstRender.current) {
      if(menu){
        TweenMax.set(background.current, { alpha: 0 })
        TweenMax.to(background.current, 1, { alpha: 1})
        console.log(MenuRefs.current)
        TweenMax.staggerFromTo(MenuRefs.current, 0.5, {
          alpha:0,
          y: -30,
          ease:Power3.easeInOut,
        }, {
          alpha:1,
          y:0,
          ease:Power3.easeInOut
        }, 0.1).delay(0.2);
      }else{
        TweenMax.to(background.current, 1, { alpha: 0}).delay(0.5)
        TweenMax.staggerFromTo(MenuRefs.current, 0.5, {
          alpha:1,
          y: 0,
          ease:Power3.easeInOut,
        }, {
          alpha:0,
          y:30,
          ease:Power3.easeInOut
        }, 0.1).delay(0.2);
      } 
    }
    firstRender.current = false;
  }, [menu])

  return (
    <header className={`container ${styles.header}`}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={`${styles.nav} ${styles.active} ${menu ? '' : 'disabled'}`} ref={background}>
        <ul className={styles.navList}>
          {MenuElements.map((item, index) => (
          <li ref={r => MenuRefs.current[index] = r}  key={item.title}>
            {item.link 
            ? (
              <ActiveLink href={item.link}>
                <a className={styles.link}>{item.title}</a>
              </ActiveLink>
            ) : (<a className={styles.link} onClick={item.action}>{item.title}</a>)
          }
          </li>
          ))}
          
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
