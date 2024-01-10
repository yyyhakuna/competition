import React, { useEffect, useState } from 'react'
import styles from 'styles/Nav.module.css'
import logo from 'public/logo.jpg'
import Image from 'next/image'
import { ethers } from 'ethers'
import { useAccount, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuthentication } from '@/hooks/useAuthentication'
const Nav = (props) => {
    const { address } = useAccount()
    const [adr, setAdr] = useState(address)
    const { connectAsync, connectors } = useConnect()
    const connect =async ()=>{
        return new Promise(resolve=>{
            connectors.find((connector) => {
                if (connector.id === "metaMask") {
                    connectAsync({connector}).then(
                        account =>{
                            resolve(account)
                        }
                    )
                    
                }
            })
        })
    }
    const connectWallet = async () => {
        if (adr !== undefined) {
            return
        }
        const {account}=await connect()
        const provider =new ethers.providers.Web3Provider(window.ethereum ,'any')
        const signer = provider.getSigner()
        await useAuthentication('b' , 'a')
        console.log(localStorage.getItem('Authorization'));
        setAdr(account)
    }
    const formatAddress = (adr) => {
        return `${adr.substring(0, 4)}...${adr.substring(adr.length - 4)}`
    }
    const clickNav = e => {
        switch (e.target.textContent) {
            case 'Overview':
                props.overViewRef.current.scrollIntoView();
                break;
            case 'Awards':
                props.awardsRef.current.scrollIntoView();
                break;
            case 'Teams':
                props.teamsRef.current.scrollIntoView();
                break;
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <Image src={logo} style={{ width: 'auto', height: '65px' }} alt='image' />
            </div>
            <div className={styles.list}>
                <button className={styles.btn} onClick={clickNav}>
                    Overview
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
                <button className={styles.btn} onClick={clickNav}>
                    Awards
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
                <button className={styles.btn} onClick={clickNav}>
                    Teams
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
                <button className={styles.btn} onClick={clickNav}>
                    Result
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
            </div>
            <button className="cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg
            border-green-600
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={connectWallet}>
                {adr ? formatAddress(adr) : 'connect'}
            </button>
        </div>
    )
}

export default Nav