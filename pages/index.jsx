import Head from 'next/head';
import Link from 'next/link';

import Footer from 'components/Footer';
import Header from 'components/Header';
import ContactMe from 'components/ContactMe';
import ContactModal from 'components/ContactModal';
import HeaderContent from 'components/HeaderContent';

const HeaderInfo = {
  title: 'Hola, soy Jonas Kahnwald, diseñador de interiores',
  button: {
    link: '#about',
    label: 'Sobre mí',
    className: 'button'
  },
  img: '/main-image.jpg'
}
const Home = () => {
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
          button={HeaderInfo.button}
        />
        <section id="about">
          <div className="grid">
            <div className="column">
              <img src="/profile.jpg" />
            </div>
            <div className="column">
              <h2>Sobre mí</h2>
              <p>
                Mi visión: esa creación, cualquiera que sea la forma que adopte, debe mejorar la
                vida de tantas personas. como sea posible. Creo con vehemencia que este deber
                poético y político, rebelde y benevolente, pragmático y subversivo debe ser
                compartido por todos.
              </p>
              <p>
                A los ojos de este consumado ciudadano del mundo, compartir su visión ética y
                humanista de un planeta más igualitario es un deber, si no un imperativo moral, que
                se traduce en proyectos poco convencionales que traen fértiles sorpresas. Es fácil
                adivinar su curso de acción: un objeto debe ser útil antes de ser hermoso.
              </p>
              <Link href="/portfolio">
                <a className="button button--hollow">Ver mi portfolio</a>
              </Link>
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

export default Home;
