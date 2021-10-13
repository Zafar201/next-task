import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchName, fetchposts } from '../store/action/postAction'
import styles from '../styles/Home.module.css'

export default function Home() {
 
  const dispatch =useDispatch();
  const posts= useSelector(state=>state.post)
   const{loading,error,data}=posts
  const {names}= useSelector(state=>state.name)
  // const {loading}=useSelector(state=>state.post)
  // const {error}=useSelector(state=>state.post)

  useEffect(()=>{
    dispatch(fetchposts())
    dispatch(fetchName())
  },[dispatch])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
         Next JS With next-redux-wrapper
        </h1> */}
       
       {loading? (<h1>Loading...</h1>):
       error? (<h1>error</h1>):
      (
        <>
        <h1>{data.title}</h1>
        <p>{data.price}</p>
        <p>{data.description}</p>
        <img src={data.image} alt="" />
        </>
      )}


      {names && names.map(item=>(
          <h1 key={item}>{item}</h1>
        ))}


        
      </main>
{/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
