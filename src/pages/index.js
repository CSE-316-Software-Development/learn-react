import React from 'react'; 
import styles from '@/styles/Home.module.css';
import MyComp from './qcomps/firstcomp';
import Bio from './qcomps/bios';
import TodoList from './qcomps/todos';
import Profile from './components/profile_props';
import Gallery from './qcomps/gallery_props';
import PackingList from './qcomps/props_item';

export default function Home() {
  return (
    <div className={styles.main}>
      <PackingList />
    </div>
  );
}
