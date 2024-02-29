// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from'@/styles/Home.module.css'
import Form1 from './components/artistsArr.js'
import Form2 from './qcomps/arrObj.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form2 />
    </div>
  )
}
