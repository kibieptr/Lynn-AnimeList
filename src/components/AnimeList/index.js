import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 px-4">
            {api.data.map((anime) => {
                return (
                    <Link href={`/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-oceandark transition-all">
                        <Image 
                        src={anime.images.webp.image_url} 
                        alt="..." 
                        width={350} 
                        height={150}  
                        className="w-full max-h-64 object-cover"
                        />
                        <h3 className="font-bold md:text-sm text-xs p-4">{anime.title}</h3>
                    </Link>
                )
            })}   
        </div>
    )
}

export default AnimeList