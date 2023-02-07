export async function getImages(numberOfImages) {
    // Call an external API endpoint to get all images
    const res = await fetch(
        `${process.env.BASE_URL}/api/images/getImages/${
            numberOfImages ? numberOfImages : ""
        }`
    );
    const data = await res.json();

    return data;
}
