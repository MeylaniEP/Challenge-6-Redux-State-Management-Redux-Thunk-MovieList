export default async function getUserData() {
  const urlParams = new URLSearchParams(window.location.search);
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
      `https://shy-cloud-3319.fly.dev/api/v1/auth/me`,
      option
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("error");
    console.error(error);
  }
}
