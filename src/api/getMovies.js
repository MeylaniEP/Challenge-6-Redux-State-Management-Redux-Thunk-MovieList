import { redirect } from "react-router-dom";

export default async function getMovies() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  const token = localStorage.getItem("token");

  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token} `,
    },
  };
  try {
    const response = await fetch(
      query === "" || query === null
        ? "https://shy-cloud-3319.fly.dev/api/v1/movie/popular"
        : `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${query}`,
      option
    );
    if (response.status !== 200) {
      return redirect("/wellcome");
    }
    const responseJson = await response.json()
    console.log("api")
    console.log(responseJson)
    return responseJson.data;
  } catch (error) {
    console.log("error");
    console.error(error);
  }
}
