import Head from 'next/head'
import SideNav from 'components/SideNav/SideNav';

export default function Home() {
  return (
    <>
      <SideNav></SideNav>
      <main className="container">
        <h1>Hello, World!</h1>
      </main>
    </>
  )
}
