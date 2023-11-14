import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Anime Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}

export default Home