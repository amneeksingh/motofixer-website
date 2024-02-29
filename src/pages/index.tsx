import CountDownRenderer from "@/components/home/count-down-renderer";
import styles from "../app/css/home.module.css"
import Countdown from 'react-countdown';
import { useEffect } from "react";
import PageLayout from "@/components/Layout";
import { socialMediaLinks } from "@/data/social-media-links";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <PageLayout>
                <div className={`flex flex-col bg-red-300 w-full h-screen justify-end ${styles.background}`}>
                    <Countdown
                        date={new Date(`${process.env.NEXT_PUBLIC_COUNT_DOWN_TILL}`)}
                        // date={Date.now() + 5000}
                        renderer={CountDownRenderer}
                    />
                    <footer className="footer p-10 flex-col flex justify-center items-center text-white">
                        <div className="social-links p-1 flex space-x-2">
                            {socialMediaLinks.map((socialMediaLink, idx) => (
                                <Link href={socialMediaLink.link} key={`sl-${idx}`} target="_blank" className="w-14 h-14 rounded-full bg-black opacity-60 text-center m-auto flex justify-center items-center">
                                    <socialMediaLink.Icon color="white" className="" />
                                </Link>
                            ))}
                        </div>
                        <div className="copyright-section p-1">
                            <p className="text-center copyright">&copy; MotoFixer 2024. Designed by <Link href="https://www.linkedin.com/in/amneek-singh/" target="_blank">Amneek</Link>.<br />
                            </p>
                        </div>
                    </footer>
                </div>
            </PageLayout>
        </>
    )
}