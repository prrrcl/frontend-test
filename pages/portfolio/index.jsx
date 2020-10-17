import Head from 'next/head';
import Link from 'next/link';

import Footer from 'components/Footer';
import Header from 'components/Header';
import ContactMe from 'components/ContactMe';
import ContactModal from 'components/ContactModal';
import styles from 'styles/Portfolio.module.scss';
import HeaderContent from 'components/HeaderContent';

const HeaderInfo = {
  title: 'Sanderson',
  button: {
    link: '/portfolio/sanderson',
    label: 'Ver proyecto',
    className: 'button button--hollow'
  },
  img: '/sanderson.jpg',
  desc: `Mental games, optical illusions, to eccentricities, to dreams, to successful
  impossibilities. When you arrive in the hotel, you do not really understand what is
  going on. Nothing is really in its place, nothing really has its true volume, its true
  size.`
}

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Frontend Developer Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container">
        <HeaderContent 
          img={HeaderInfo.img}
          title={HeaderInfo.title} 
          desc={HeaderInfo.desc}
          button={HeaderInfo.button} 
        />
        <section>
          <div className={`${styles.work} grid`}>
            <div className="column">
              <img src="/s-hotel.jpg" />
            </div>
            <div className="column">
              <div className="content-wrapper">
                <h2>S Hotel</h2>
                <p>
                  With its 103 refined rooms and its Michelin-star chef restaurant, the interior is
                  conceived as a bridge between tradition and modernity. By incorporating indigenous
                  Taiwanese humanistic features as well as modern, elegant design.
                </p>
                <button className="button button--hollow">Ver proyecto</button>
              </div>
            </div>
          </div>
          <div className={`${styles.work} grid`}>
            <div className="column">
              <img src="/sls.jpg" />
            </div>
            <div className="column">
              <div className="content-wrapper">

                <h2>SLS</h2>
                <p>
                  Redefined every aspect of the hotel experience in the 1990s and spurred the
                  ‘boutique hotel’ movement. Featuring a unique dual guest lobby concept where one
                  will cater exclusively to hotel guests, while the other will be a lively,
                  multi-faceted public dining and retail environment called The Bazaar.
                </p>
                <button className="button button--hollow">Ver proyecto</button>
              </div>
            </div>
          </div>
          <div className={`${styles.work} grid`}>
            <div className="column">
              <img src="/s-hotel.jpg" />
            </div>
            <div className="column">
            <div className="content-wrapper">
                <h2>Mama Shelter</h2>
                <p>
                  With its 103 refined rooms and its Michelin-star chef restaurant, the interior is
                  conceived as a bridge between tradition and modernity. By incorporating indigenous
                  Taiwanese humanistic features as well as modern, elegant design.
                </p>
                <button className="button button--hollow">Ver proyecto</button>
              </div>
            </div>
          </div>
          <div className={`${styles.work} grid`}>
            <div className="column">
              <img src="/xiv.jpg" />
            </div>
            <div className="column">
              <div className="content-wrapper">

                <h2>XIV</h2>
                <p>
                  XIV, an innovative experience in dining that promises to add an exciting new
                  dimension to the Los Angeles culinary landscape. Located on Sunset Boulevard, XIV
                  evokes an European chateau with it’s modern American cuisine with a fluid, convivial
                  atmosphere and unique menu structure.
                </p>
                <button className="button button--hollow">Ver proyecto</button>
              </div>
            </div>
          </div>
        </section>
        <ContactMe />
      </main>
      <ContactModal />
      <Footer />
    </>
  );
};

export default Portfolio;
