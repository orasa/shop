// await for window load
window.onload = () => {

	// ::: Categories :::

	// target ul inside sidebar
	let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
	// define categies
	let categories = ['Wallets', 'Bags', 'Shoes', 'Umbrellas']
	// display each category in the DOM
	categories.forEach((c) => {
		ul.insertAdjacentHTML('beforeEnd', `
			<li>
				<a href="#">${c}</a>
			</li>
		`)
	})

	// ::: Products :::

	// target products
	let products_ui = document.getElementById('products')
	// define products
	let products = [{
		title: '1',
		price: 200,
		description: 'Air Max'
	},
	{
		title: '2',
		price: 150,
		description: 'Adidas Yo'
	},
	{
		title: '3',
		price: 690,
		description: 'Hahaha'
	}]
	// display each product in the DOM
	products.forEach((p) => {
		products_ui.insertAdjacentHTML('beforeEnd', `
		<div class="product">
			<div class="product-image">
				<i class="far fa-star"></i>
			</div>
			<div class="product-extras">
				<div class="description">
					<h4>${p.title}</h4>
					<small>${p.description}</small>
				</div>
				<div class="price">
					<span>$${p.price}</span>
					<a href="#" class="button">shop now</a>
				</div>
			</div>
		</div>
		`)
	})


}
