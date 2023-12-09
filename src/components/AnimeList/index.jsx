import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-6 px-4">
            {api.data?.map((anime, index) => {
                const truncatedTitle = anime.title.length > 14 ? anime.title.slice(0, 14) + '...' : anime.title;

                return (
                    <Link href={`/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accentdark transition-all" key={index}>
                        <div className="relative">
                            <Image
                                src={anime.images.webp.image_url}
                                alt="..."
                                width={350}
                                height={150}
                                className="w-[130px] h-[200px] rounded-[20px] transition-transform duration-300 transform hover:translate-y-[-5px]"
                            />
                        </div>
                        <h1 className="font-bold md:text-sm text-xl p-4">{truncatedTitle}</h1>
                    </Link>
                );
            })}
        </div>
    );
}

export default AnimeList;
