import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date}){
    return (
        <div>
            <h1>{title}</h1>
            <h2>Release Date</h2>
            <Link href={"/jfui"}>
                <Image  width={800} height={100} alt={title} priority/>
            </Link>
        </div>
    )
}