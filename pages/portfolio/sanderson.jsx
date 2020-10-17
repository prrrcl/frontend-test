import Head from 'next/head';

import Footer from 'components/Footer';
import Header from 'components/Header';
import ContactMe from 'components/ContactMe';
import ContactModal from 'components/ContactModal';
import styles from 'styles/PortfolioDetail.module.scss';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Frontend Developer Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <section className={`${styles.billboard} container`}>
          <img src="/sanderson.jpg" />
        </section>
        <section className="container container--medium">
          <div className="grid">
            <div className="column">
              <div className="content-wrapper">
              <h1>Sanderson</h1>
              <p className={styles.highlight}>
                Mental games, optical illusions, to eccentricities, to dreams, to successful
                impossibilities. When you arrive in the hotel, you do not really understand what is
                going on. Nothing is really in its place, nothing really has its true volume, its
                true size.
              </p>
              </div>
            </div>
            <div className="column">
              <div className="content-wrapper">
              <p>
                The Sanderson hotel designed by Jonas Kahnwald opened its doors in 1998 in London.
              </p>
              <p>
                “I dedicate the Sanderson to mental games, optical illusions, to eccentricities, to
                dreams, to successful impossibilities. When you arrive in the hotel, you do not
                really understand what is going on. Nothing is really in its place, nothing really
                has its true volume, its true size.
              </p>
              <p>
                The sofas are "stretched", the countertops are television screens, the bar, much too
                long, is luminescent, there are gigantic marquetry cabinets with no drawers... When
                you take the elevator, you fall into outer space, they are completely covered with
                three-dimensional photos of space.
              </p>
              <p>
                When you arrive into your room, there aren’t really any walls, you do not know what
                you see. The few existing separations, all of glass and veiling, are more or less
                luminescent. There is an effect of extraordinary freedom. Once in bed, you discover
                the only work of art is on the ceiling: a landscape, and while you fall asleep, you
                can wander the small path, pass between the two hills and be gone, just like that,
                far away.
              </p>
              <p>
                With the Sanderson hotel, we are pushing the acceptable limits for a hotel: the beds
                are not perfectly in the middle, the bathrooms are not in a corner, and they are
                entirely in glass, all of this is very disturbing.
              </p>
              <p>
                The Sanderson is an unprecedented exploration of the territories of daydreaming and
                avant-garde in the hotel industry.”
              </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="container container--small">
          <ul className={styles.gallery}>
            <li>
              <img src="/sanderson-chairs.jpg" />
            </li>
            <li>
              <img src="/sanderson-elevator.jpg" />
            </li>
            <li>
              <img src="/sanderson-hall.jpg" />
            </li>
          </ul>
        </section>
        <nav className={styles.navigation}>
          <a className={`${styles.link} ${styles.next}`} href="#">
            XIV
            <span className={styles.label}>Siguiente proyecto</span>
          </a>
          <a className={`${styles.link} ${styles.previous}`} href="#">
            S Hotel
            <span className={styles.label}>Proyecto anterior</span>
          </a>
        </nav>
        <ContactMe />
      </main>
      <ContactModal />
      <Footer />
    </>
  );
};

export default Portfolio;
