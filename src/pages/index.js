import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PackingList from './components/props_item'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import MenuBar from './qcomps/menuBar'
import Gallery from './qcomps/state'
import Form from './components/snapshot2'
import FeedbackForm from './qcomps/thankYouCrash'

export default function Home() {
  return (
    <div className={styles.main}>
        <FeedbackForm />
    </div>
  )
}
