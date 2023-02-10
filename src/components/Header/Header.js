import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerGapLeft}></div>

      <div className={styles.logoHeaderDiv}>
        <img className={styles.headerLogo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/header/whitelogoresized.png`}></img>
      </div>

      <div className={styles.menuHeaderDiv}>
        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Strony i aplikacje webowe</p>
        </div>
        
        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Social media marketing</p>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Vulnerability testy</p>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Kontakt</p>
        </div>
      </div>

      <div className={styles.headerGapRight}></div>
    </div>
  );
};

export default Header;