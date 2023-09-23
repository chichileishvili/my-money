import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
export default function Navbar() {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}> My Money</li>
        {!user && (
          <>
            <li>
              {' '}
              <Link to='Login'> Login</Link>
            </li>
            <li>
              {' '}
              <Link to='Signup'> Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>hello,{user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                {' '}
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
