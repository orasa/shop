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


    // ::: Products :::


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


//
// // breaking down the function part
// // (a) => { } bring this into the function
//
// //writh this first then fillout the foll
//
// // ('url').then(a).catch(a) => {}
//
// window.onload = () => {
//
// axios.get('http://localhost:3000/api/products').then((res) => {
//
//   let products = res.data
//   let products_ui = document.getElementById('products')
//
//          products.forEach((p) => {
//           products_ui.insertAdjacentHTML('beforeEnd',`
//           <div class="product">
//             <div class="product-image">
//               <i class="far fa-star"></i>
//             </div>
//             <div class="product-extras">
//               <div class="description">
//                 <h4>${p.description}</h4>
//                 <small>${p.model}</small>
//               </div>
//               <div class="price">
//                 <span>${p.price}</span>
//                 <a href="#" class="button">shop now</a>
//               </div>
//             </div>
//           </div>`
//         )
//       })
// }).catch((err) => {
//         console.log('err', err)
//     })
//
// // FINISHED THE GET PRODUCTS WITH PROMISS
//
//
//
//
//
//
// // // get id from html, we pass id name into
// // let wrap = document.getElementById('wrap')
// //
// // console.log(wrap)
// //
// // // window.onload allowing us to put scipt on the head of html
// //
// //
// //
// // // window.onload = () => {
// // //    console.log('window is loaded')
// // // }
// //
// // // add element on browser
// // //writing html element on javaScript File insert() next to Sidebar
// // //take 2 paramenter beforebegin, afterEnd, afterBeginning
// //
// // // window.onload = () => {
// // //  let sidebar = document.getElementById('sidebar')
// // //  sidebar.insertAdjacentHTML('beforeEnd',`<h1>Promotion</h1>`)
// // // }
// //
// // window.onload = () => {
// //  let sale = document.getElementById('sale')
// //  sale.insertAdjacentHTML('afterEnd',`<h1>Promotion</h1>`)
// // }
// //
// // //getElementsByTagName getElementsByTagName('ul') = arrayof [ul, ul]
// // // window.onload = () => {
// // //  let ul = document.getElementsByTagName('ul')[0]
// // //  ul.insertAdjacentHTML('beforeEnd',`<li>
// // //    <a href="#">Wallet</a>
// // //  </li>`)
// // // console.log(ul);
// // // }
// //
//
//   let ul = document.getElementsByTagName('ul')[0]
//  let categories = ['Wallets','Bags', 'Shoes', 'Umbrella']
//  //display each
//
//  categories.forEach((c) => {
//    ul.insertAdjacentHTML('beforeEnd',`
//    <li>
//     <a href="#">${c}</a></li>
//     `)
//  })
//
// }
