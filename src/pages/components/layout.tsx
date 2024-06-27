import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image'
import Navigation from "./navigation";
import style from "../../styles/layout.module.css";
import Logo from "../img/Logo.png";


export default function Layout({ children }: PropsWithChildren) {
    return (
    <>
        <Head>
            <title>Web Studio</title>
            <meta name="description" content="SkillFactory Next.js project" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <div>
        <header className={style.header}>
            <div>
               <Link href="/">
                    <Image 
                        src={Logo}
                        alt="logo"
                        className={style.img}               
                    />
               </Link>
            </div>
            <Navigation />
        </header>
        <main>{children}</main>
        <footer>&copy; 2023 Web studio</footer>
        </div>
    </>
    );
}