import { getAnimeResponse } from "@/app/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const capitalizeEachWord = (string) => {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const Key = capitalizeEachWord(decodedKeyword);

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  // const searchAnime = await response.json();

  const SearchAnime = await getAnimeResponse("anime", `q={${decodedKeyword}}`);
  const searchAnime = SearchAnime;

  return (
    <>
      <section>
        <Header title={`Search Results For: ${Key}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
