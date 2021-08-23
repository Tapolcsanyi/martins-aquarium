import { getAnime } from "./animeData.js";
import { Anime } from "./Anime.js";

export const AnimeList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".animeList");
    const allAnime = getAnime();

    // // Add to the existing HTML in the content element
	let animeHTMLRepresentation = "";
	for (const oneAnime of allAnime) {
		animeHTMLRepresentation += Anime(oneAnime);
	}
contentElement.innerHTML += animeHTMLRepresentation
} 