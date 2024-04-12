interface movieProps {
  id: number
  title: string
}

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const movies = await response.json();
  // console.log(movies);
  return (
    <main>
      <h1>Hello from Next 13🔥</h1>
      {movies.results.map((movie : movieProps) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </main>
  );
}
