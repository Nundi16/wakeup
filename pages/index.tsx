import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { Computer } from '../types/index'
import { useEffect, useState } from 'react'
import useComputers from '../hooks/useComputers'
import Loading from '../components/Loading'

const Home: NextPage = () => {
  const { computers, load } = useComputers()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {load ? <Loading showcaption={true}></Loading> :
          computers.map(c => (
            <Card key={c.Ip} computer={c}></Card>
          ))
        }
      </main>
    </div>
  )
}

export default Home
