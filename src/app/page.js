import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Anime Popular</h1>
        <Link href="/popular" className="text-sm bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-1 rounded"> Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 px-4">
        {anime.data.map(data =>{
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default Home