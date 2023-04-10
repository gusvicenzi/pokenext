import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.sass'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src='/images/pokeball.png'
          alt='pokeball'
          width={30}
          height={30}
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
