export default async function getDetailsMovie(id) {
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
      `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
      option
    );
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
  }
}
