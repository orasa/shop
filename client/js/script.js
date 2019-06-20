// await for window load
window.onload = () => {
	// let sidebar = document.getElementById('sidebar')
	let ul = document.getElementsByTagName('ul')[0]
	let categories = ['Wallets', 'Bags', 'Shoes', 'Umbrellas']
	categories.forEach((c) => {
		ul.insertAdjacentHTML('beforeEnd', `
			<li>
				<a href="#">${c}</a>
			</li>
		`)
	})
}
