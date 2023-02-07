import { useState } from "react";
import { newImage } from "../lib/new-image";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Button from "@mui/material/Button";
import React, { useRef } from "react";
import { RotatingLines } from "react-loader-spinner";

import styles from "../styles/Home.module.css";

function NewImage() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const inputRef = useRef(null);

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            inputRef.current.click();
        }
    }

    const handleClick = async (e) => {
        const prompt = document.getElementById("prompt").value;
        setLoading(true);
        const response = await newImage(prompt);

        setLoading(false);
        setImage(response.imageUrl);
    };

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h2 className={inter.className}>
                    Enter a Prompt to generate a new image:
                </h2>
                <TextField
                    sx={{ paddingRight: "10px" }}
                    variant="filled"
                    id="prompt"
                    label="Prompt"
                    value={prompt}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setPrompt(e.target.value)}
                    InputProps={{
                        classes: {
                            input: styles.textField,
                        },
                    }}
                />
                <Button
                    ref={inputRef}
                    variant="contained"
                    onClick={handleClick}
                >
                    Generate
                </Button>
            </div>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={loading}
            />

            {image && !loading && (
                <Image
                    margin="top"
                    src={image}
                    alt={prompt}
                    width={512}
                    height={512}
                    priority
                />
            )}
        </main>
    );
}

export default NewImage;
