import Link from "next/link"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://www.facebook.com/nathaniel.jefferson.52"><FontAwesomeIcon icon={faFacebook} /></a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/nkjefferson"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.linkedin.com/in/nathaniel-jefferson"><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li className={styles.navItem}>
          <a href="http://codepen.io/nkjefferson/#"><FontAwesomeIcon icon={faCodepen} /></a>
        </li>
      </ul>
    </footer>
  )
}
