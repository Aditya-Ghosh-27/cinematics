import Movie from "@/app/components/Movie";

interface movieProps {
  id: number
  title: string
  poster_path: string
  release_date: string
}

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const movies = await response.json();
  // console.log(movies); 
  return (
    <>
      <h1 className="text-xl flex justify-center items-center ">CineMatics🔥🚀</h1>
      <main className="grid grid-cols-fluid gap-16 mt-10">
        {movies.results.map((movie: movieProps) => (
          <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} release_date={movie.release_date} />
        ))}
      </main>
    </>
  );
}
