export const Anime = (animeObj) => {
	return `<article class="anime-card">
				<div><img class="anime-image" src="images/${animeObj.image}" /></div>
				<h3 class="anime-name">${animeObj.name}</h3>
				<ul>
					<li class="anime-details">Made Me Cry: ${animeObj.madeMeCry}</li>
					<li class="anime-details">Awesome Fights: ${animeObj.awesomeFights}</li>
					<li class="anime-details">Rank: ${animeObj.rank}</li>
				</ul>
        	</article>`
}