import Image from "next/image";

interface movieProps {
    id: number
}

export async function getStaticParams() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const movies = await response.json();

    return movies.results.map((movie: movieProps) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetails({ params }: any) {
    const { id } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    return (
        <div>
            <div>
                <h2 className="text-4xl">{data.title}</h2>
                <h1 className="text-lg">{data.release_date}</h1>
                <h2>Runtime: {data.runtime} minutes</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
                    {data.status}
                </h2>
                <Image className="my-8 w-full" src={imagePath + data.backdrop_path} alt={data.title} width={800} height={500} priority />
            </div>
            <div className="my-4">
                <p className="text-lg">{data.overview}</p>
            </div>
        </div>
    )
}