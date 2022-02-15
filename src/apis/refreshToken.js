export const refreshToken = (refreshToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://securetoken.googleapis.com/v1/token?key=AIzaSyDNP0taYqsFtYC5E7XIgEMOSJKcqsFy9kE",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
