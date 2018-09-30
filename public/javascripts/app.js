window.addEventListener("load", async e => {
  await fetchTrending();

  //   if ("serviceWorker" in navigator) {
  //     try {
  //       navigator.serviceWorker.register("serviceWorker.js");
  //       console.log("SW registered");
  //     } catch (error) {
  //       console.log("SW failed");
  //     }
  //   }
});

async function fetchTrending() {
  const apiKey = "jftNF8FqcDRQQ3WdwhRpsJePJ9sH5nfx";
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`
  );
  const json = await res.json();
  console.log(json);
  main = document.getElementById("container");
  const giphyData = json.data.map(createMeme).join("\n");
  console.log(giphyData);
  document.getElementById("container").innerHTML = giphyData;
}

function createMeme(giphy) {
  return `<h3>${giphy.title}</h3><img src="${
    giphy.images.fixed_height_small.url
  }"><br>`;
}
