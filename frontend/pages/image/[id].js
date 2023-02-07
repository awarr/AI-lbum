import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import Button from "@mui/material/Button";
import { RotatingLines } from "react-loader-spinner";

import styles from "../../styles/Home.module.css";
import { variantImage } from "../../lib/variant-image";

const ImagePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(false);
    const [newImage, setNewImage] = useState("");

    const handleClick = async (e) => {
        setLoading(true);
        const response = await variantImage(id);
        setLoading(false);
        setNewImage(response.imageUrl);
    };

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h2 className={inter.className}>
                    Click the button to create a variation of this image:
                </h2>
                <Button variant="contained" onClick={handleClick}>
                    Generate
                </Button>
            </div>

            <div className={styles.grid}>
                <Image
                    margin="top"
                    src={`${process.env.BASE_URL}/images/${id}.png`}
                    width={512}
                    height={512}
                    priority
                />
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={loading}
                />

                {newImage && !loading && (
                    <Image
                        margin="top"
                        src={newImage}
                        alt={prompt}
                        width={512}
                        height={512}
                        priority
                    />
                )}
            </div>
        </main>
    );
};

export default ImagePage;
