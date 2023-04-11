import Image from 'next/image'
import styles from './About.module.sass'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        maxime, eveniet veritatis consectetur sit praesentium nemo consequatur?
        Ut quas nobis itaque sapiente consequatur quo eveniet enim unde nihil.
        Minus, aspernatur.
      </p>
      <Image
        src='/images/charizard.png'
        width={300}
        height={300}
        alt='Charizard'
      />
    </div>
  )
}
