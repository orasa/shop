// await for window load
window.onload = () => {

    // ::: Categories :::

    // target ul inside sidebar
    let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
    // define categories
    let categories = ['Laptops', 'MacBooks', 'Mobile Phones', 'Accessoires']
    // display each category in the DOM
    categories.forEach((c) => {
        ul.insertAdjacentHTML('beforeEnd', `
            <li>
                <a href="#">${c}</a>
            </li>
        `)
    })

    //promise function
    const get_data = () => {
    return new Promise((resolve, rejet) => {
      setTimout(() => {
        resolve ['Jeff', 'Edgar', 'Tom'])
      }, 4000)
  })
}

get_data().then(resolve) => {
  console.log('name', resolve)
}).catch()






    axios.get('http://localhost:3000/api/products').then((res) => {
        let products = res.data
        // target products
        let products_ui = document.getElementById('products')
        // display each product in the DOM
        products.forEach((p) => {
            products_ui.insertAdjacentHTML('beforeEnd', `
            <div class="product">
                <div class="product-image">
                    <i class="far fa-star"></i>
                </div>
                <div class="product-extras">
                    <div class="description">
                        <h4>${p.name}</h4>
                        <small>${p.color}</small>
                    </div>
                    <div class="price">
                        <span>$${p.price}</span>
                        <a href="#" class="button">shop now</a>
                    </div>
                </div>
            </div>
            `)
          })
   }).catch((err) => {
  console.log('err', err)
})
}

//setTimout(excute this function after time, time in mill sec) 2 agrulments
//
// setTimeout(() => {
//   console.log(2 + 5)
// },1000)
//
// const set_name = (n) =>
// setTimeout() = {
//   let name = n
//   console.log("name after 3s", name)
// }
// set_name('Tony')
//
// setTimeout(() => {
//   console.log(2 + 5)
// },1000)

const array = [1, 2, 3]

setTimeout(() => {
	console.log(array)}, 5000
)

// setTimout(() =>
// number = array
// number.forEach((i) => {
//   console.log(i);
// }, 5000)
// )

// use promise
const get_data = ()=> {
  return ['nui', 'mae', 'Nic']
}
