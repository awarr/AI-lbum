import { getImages } from "../lib/get-images";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/Home.module.css";

function Gallery({ images }) {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1 className={inter.className}>Gallery</h1>
            </div>

            <div className={styles.grid}>
                {
                    // map over the images and render them
                    images.map((image) => (
                        <div key={image._id} className={styles.card}>
                            <Link href={`/image/${image._id}`}>
                                <Image
                                    src={image.imageUrl}
                                    alt="A random image"
                                    width={512}
                                    height={512}
                                    priority
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}

// This function runs only on the server side
export async function getStaticProps() {
    const images = await getImages();

    // Props returned will be passed to the page component
    return { props: { images } };
}

export default Gallery;
