export const getCategoryNews = async (id) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`, {
        cache: "no-store"
    })
    return res.json()
}