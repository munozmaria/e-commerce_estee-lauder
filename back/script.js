// Recuperation de l'api pour afficher tous les produits sur la page d'accueil
fetch("https://ai-skin-beauty.p.rapidapi.com/face/editing/retouch-skin")
	.then((response) => response.json())
	.then((json) => giveData(json))

//Création d'une boucle forEach pour inserer du code HTML
function giveData(jsonData) {
	//console.log(json)
	jsonData.forEach((item) => {
		document.getElementById("items").innerHTML += `
            <a href="./product.html?id=${item._id}">
            <article>
              <img src="${item.imageUrl}" alt="${item.altTxt}">
              <h3 class="productName">${item.name}</h3>
              <p class="productDescription">${item.description}</p>
            </article>
            </a> 
            `
	})
	//console.log (item)
}
