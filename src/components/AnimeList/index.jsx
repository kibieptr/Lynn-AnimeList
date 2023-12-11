import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-4 px-10">
            {api.data?.map((anime, index) => {
                const truncatedTitle = anime.title.length > 14 ? anime.title.slice(0, 14) + '...' : anime.title;

                return (
                    <Link href={`/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accentdark transition-all" key={index}>
                        <div className="flex flex-col items-start">
                            <div className="relative">
                                <Image
                                    src={anime.images.webp.image_url}
                                    alt="..."
                                    width={350}
                                    height={150}
                                    className="w-[140px] h-[200px] rounded-[15px] transition-transform duration-500 transform hover:translate-y-[-5px] mr-2"
                                />
                            </div>
                            <h3 className="font-bold md:text-sm text-sm p-2">{truncatedTitle}</h3>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default AnimeList;
