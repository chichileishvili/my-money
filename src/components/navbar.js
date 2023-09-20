import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}> My Money</li>
        <li>
          {' '}
          <Link to='Login'> Login</Link>
        </li>
        <li>
          {' '}
          <Link to='Signup'> Signup</Link>
        </li>
        <li>
          {' '}
          <Link to='home'> Login</Link>
        </li>
      </ul>
    </nav>
  )
}
