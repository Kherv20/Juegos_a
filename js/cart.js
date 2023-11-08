(async function load(){

let cart = [];
const productsList = await cacheVerify()
const $cart = document.getElementById('cart')
const $cart__button = document.getElementById('cart__button')
const $cart__button__icon = document.getElementById('cart__button__icon')
const $cart__sum = document.getElementById('cart__sum')
const $cart__empty = document.getElementById('cart__empty')
const $cart__products = document.getElementById('cart__products')
const $add__to__cart = document.querySelectorAll('.add__to__cart')
const $add__promo__cart = document.querySelectorAll('.add__promo__cart')

// fetch('http://localhost/jartate/data.json')
// 	.then((response)=>{
// 		return response.json()
// 	}).then(({products})=>{
// 		products = products
// 	}).catch(()=>{
// 		console.log('Ocurrio un error')
// 	})

async function getData(url) {
		const response = await fetch(url);
		
		const data = await response.json()
		return data;
}

async function cacheVerify() {
	const listName = "products";
	const cacheList = window.localStorage.getItem(listName);

	if (cacheList) return JSON.parse(cacheList)

	const { products: productsList } = await getData("./data.json")
	window.localStorage.setItem(listName, JSON.stringify(productsList))
	return productsList
}

function cartShow () {
	$cart.classList.toggle('cart--active')
	$cart__button__icon.classList.toggle('fa-times')
	$cart__button__icon.classList.toggle('fa-shopping-cart')
	document.body.classList.toggle('overflow-none')
}

function cartVerify (array) {
	if (array.length >= 1) {
		$cart__button.classList.add('cart__button--active')
		$cart__sum.textContent = cantItem(array);
		$cart__empty.classList.remove('cart__empty--active')
		$cart__products.classList.add('$cart__products--active')

	} else {
		$cart__button.classList.remove('cart__button--active')
		$cart__sum.textContent = ""
		$cart__empty.classList.add('cart__empty--active')
		$cart__products.classList.remove('$cart__products--active')
	}
} 

function cantItem (array) {
	let count = 0;
	array.forEach((cart) => {
		count += cart.count
	})
	return count
}

function findById(list, id) {
	return list.find(cart => cart.id === parseInt(id, 10))
}

function templateCart (id, count) {
	let hmtlContent;
	let content = findById(productsList, id)
	
	hmtlContent = `
		<li class="cart__product__2" id="${content.id}-cart" >
			<figure>
				<img src="${content.image}" alt="">
			</figure>
			<div class="cart__information">
				<div class="row">
					<div class="col--12">
						<div class="cart__cost">
							${content.cost}${content.moneda}
						</div>
						<h3 class="cart__name">${content.name}</h3>
					</div>
				</div>
				<div class="row">
					<div class="col--5 col--sm-7 cart__cant">
						<div class="cart__left"><i class="fas fa-caret-left"></i></div>
						<div class="cart__input"><input class="input" type="text" value="${count}" /></div>
						<div class="cart__right"><i class="fas fa-caret-right"></i></div>
					</div>
					<div class="col--2 col--sm-5 cart__delete">
						<i class="far fa-trash-alt"></i>
					</div>
				</div>
			</div>
		</li>
	`

	const html = document.implementation.createHTMLDocument();
	html.body.innerHTML = hmtlContent;

	return html.body.children[0];
}

function addToCart (id) {
	let exist = cart.find((cart, index) => {

		cart.index = index
		return cart.id === parseInt(id, 10)
	})

	if (typeof exist != "undefined") {
		cart[exist.index].count = cart[exist.index].count + 1
		document.getElementById(`${id}-cart`).querySelector('input').value = cart[exist.index].count
	} else {
		cart.push({id:parseInt(id, 10), count:1})
		const $elementContent = templateCart(id, 1)
		$cart__products.append($elementContent)
	}

}

$add__to__cart.forEach((elem) => {
	elem.addEventListener('click', function (e) {
		e.preventDefault()
		this.classList.add('product__cart--active')
		
		addToCart(this.dataset.id)
		cartVerify(cart)
		
		setTimeout(()=>{
			this.classList.remove('product__cart--active')
		},1200)
	}, true)
})

$add__promo__cart.forEach((elem) => {
	elem.addEventListener('click', function (e) {
		e.preventDefault()
		this.classList.add('add__promo__cart--active')
		
		addToCart(this.dataset.id)
		cartVerify(cart)
		
		setTimeout(()=>{
			this.classList.remove('add__promo__cart--active')	
		},1200)
	}, true)
})

$cart__button.addEventListener('click', (e) => {
	cartShow()
	cartVerify(cart)
})


})()