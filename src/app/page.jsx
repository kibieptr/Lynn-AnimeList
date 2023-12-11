import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=12")

  return (
    <>
      <section>
        <Header title="Anime Popular 🔥" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}

export default Page