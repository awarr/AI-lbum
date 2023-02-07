export async function variantImage(id) {
    // Call an external API endpoint to get image
    const res = await fetch(
        `${process.env.BASE_URL}/api/images/variantImage/${id}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await res.json();

    return data;
}
