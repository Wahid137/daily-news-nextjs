export const getCategoryNews = async (category) => {
    const res = await fetch("https://the-news-portal-server.vercel.app/categories")
    return res.json()
}