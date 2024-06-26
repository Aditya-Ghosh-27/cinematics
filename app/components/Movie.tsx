import Link from "next/link";
import Image from "next/image";

interface MovieProps{
    title: string,
    id: number,
    poster_path: string,
    release_date: string
}

export default function Movie({ title, id, poster_path, release_date}: MovieProps){
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} width={800} height={800} alt={title} priority/>
            </Link>
        </div>
    )
}