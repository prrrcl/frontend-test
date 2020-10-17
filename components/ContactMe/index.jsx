import styles from './ContactMe.module.scss';

import { useAppContext } from 'contexts/AppContext';

const ContactMe = () => {
  const { toggleContactModal } = useAppContext();

  return (
    <section className={`container ${styles.container}`}>
      <div className="grid">
        <div className="column display">Te interesa hacer un proyecto juntxs?</div>
        <div className="column">
          <a className="button button--hollow" onClick={toggleContactModal}>
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
