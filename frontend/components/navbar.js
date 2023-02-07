import Link from "next/link";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/Home.module.css";

const Navbar = () => {
    const router = useRouter();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (router.pathname === "/") {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [router.pathname]);

    return (
        <>
            {showNavbar && (
                <div>
                    <nav className={styles.navbar}>
                        <Link
                            href="/"
                            className={
                                router.pathname === "/" ? "selected" : ""
                            }
                        >
                            Home
                        </Link>
                        <Link
                            href="/gallery"
                            className={
                                router.pathname === "/gallery" ? "selected" : ""
                            }
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/new-image"
                            className={
                                router.pathname === "/new-image"
                                    ? "selected"
                                    : ""
                            }
                        >
                            New Image
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
