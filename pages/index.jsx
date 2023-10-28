import { ConnectButton } from "@rainbow-me/rainbowkit"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Nav from "@/components/Nav"
import Overview from "@/components/Overview"

const Home = () => {
  return (
    <div >
      <Nav />
      <Overview />
    </div>
  )
}

export default Home
