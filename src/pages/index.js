import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile.js'
// import Gallery from "./components/gallery.js";
// import Profile from './qcomps/profile_mistake.js'
import Firstcomp from './qcomps/firstcomp.js'
import Bios from './qcomps/bios.js';
import Profile from './components/profile_props.js'
import TodoList from "./qcomps/todos.js";
import Gallery from './qcomps/state.js'
import List from "./qcomps/list_keys_id.js";
import RecipeList from "./qcomps/recipes.js";
import MenuBar from "./qcomps/menuBar.js";
import Counter from "./components/queueUpdates.js";
import React from "react";
import Form from "@/pages/components/snapshot2";
import RequestTracker from "@/pages/qcomps/shoppingCart";
import Scoreboard from "@/pages/qcomps/updObjectsForm";

export default function Home() {
  return (
    <div className={styles.main}>
        {/*<Gallery />*/}
        {/*<Profile />*/}
        {/*<Firstcomp />*/}
        {/*<Bios />*/}
        {/*<TodoList />*/}
        {/*<Profile />*/}
        {/*<Gallery />*/}
        {/*<List />*/}
        {/*<RecipeList />*/}
        {/*<MenuBar />*/}
        {/*<Counter />*/}
        {/*<Form />*/}
        {/*<RequestTracker />*/}
        <Scoreboard />
    </div>
  )
}
