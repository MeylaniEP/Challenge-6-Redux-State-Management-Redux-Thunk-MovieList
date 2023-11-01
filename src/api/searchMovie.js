export default async function searchMovies(q) {
  const token = localStorage.getItem("token");
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `https://shy-cloud-3319.fly.dev/api/v1/search/movie?query=${q}`,
      option
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
