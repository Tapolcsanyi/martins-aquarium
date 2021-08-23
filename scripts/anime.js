export const Anime = (animeObj) => {
	return `<article class="anime-card">
				<div><img class="anime-image" src="images/${animeObj.image}" /></div>
				<h3 class="anime-name">${animeObj.name}</h3>
				<ul>
					<li class="anime-details">${animeObj.madeMeCry}</li>
					<li class="anime-details"> ${animeObj.awesomeFights} inches</li>
					<li class="anime-details"> ${animeObj.rank}</li>
				</ul>
        	</article>`
}