export async function newImage(prompt) {
    // Call an external API endpoint to get image
    const res = await fetch(`${process.env.BASE_URL}/api/images/newImage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt,
        }),
    });
    const data = await res.json();

    return data;
}
