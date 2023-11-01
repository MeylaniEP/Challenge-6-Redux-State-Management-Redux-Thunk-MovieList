export default async function popularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDJjOWMxZTc4YzljNTZhNjA4YTAxMmFhODI4MWZmMiIsInN1YiI6IjY1MTQyNDBiYmRkNTY4MDBjN2NlZmYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XTsX5M91f3mZe_rDHE85Ec0emA6UElphl5YePmcpcuU",
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ad2c9c1e78c9c56a608a012aa8281ff2",
      options
    );

    if (response.ok) {
      const data = await response.json();
      const firstThreeMovies = data.results.slice(0, 3);
      // console.log(firstThreeMovies);
      return firstThreeMovies;
    } else {
      throw new Error("Gagal mengambil data dari TMDB API");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
