import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
     <p>Hello Next.js</p>
    </Head>
    <Link  href="/about" title="About Page">
      <a>About Page</a>
    </Link>
  </div>
)

export default Home
