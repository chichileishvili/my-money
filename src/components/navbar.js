import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
export default function Navbar() {
  const { logout } = useLogout()
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
          <button className='btn' onClick={logout}>
            {' '}
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
