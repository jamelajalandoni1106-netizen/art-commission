const urlQuery = window.location.search
const urlParams = new URLSearchParams(urlQuery)
const productID = urlParams.get("productID")


let product = undefined
inventory.items.forEach(item => {

	if(item["item id"] == productID) {
		product = item
		return
	}

})


let productImage        = document.getElementById("product-image")
let productType         = document.getElementById("product-type")
let productName         = document.getElementById("product-name")
let productPrice        = document.getElementById("product-price")
let productDiscount     = document.getElementById("product-discount")
let productDescription  = document.getElementById("product-description")
let productDetails      = document.getElementById("product-details")
let productStar         = document.getElementById("product-star-container")

productImage.style.backgroundImage = `url("`+ product["image path"]  +`")`
productType.innerHTML           = product["item type"]
productName.innerHTML           = product["item name"]
productPrice.innerHTML          = "₱" + calculateDiscountPrice(product.price, product.discount) + ` <span id="product-discount-price" style="color: #d2d2d2;"></span>`

let productDiscountPrice = document.getElementById("product-discount-price")
productDiscountPrice.innerHTML  = "₱" + product.price

productDiscount.innerHTML       = "-" +product.discount+ "%"
productDiscount.style.display   = (product.discount == 0) ? "none" : "block"
productDiscountPrice.style.display = (product.discount == 0) ? "none" : "inline"
productDiscountPrice.style.textDecoration = (product.discount == 0) ? "none" : "line-through"

productStar.innerHTML = getStars(product.reviews)
productStar.innerHTML += `<p style="font-size:12px">`+ product.reviews.length +` Reviews</p>`

productDescription.innerHTML = product.description
productDetails.innerHTML = product.details



let reviewHolder = document.getElementById('review-holder')
product.reviews.forEach(review => {
    reviewHolder.innerHTML += 
    `
    <div class="review">
        <div class="review-header">
            <i class='bx bxs-user-circle' style="font-size:40px;"></i>
            <div>
                <div style="display: flex; align-items: center;">
                <p><b>`+ review.author +`</b></p>
                <p style="font-size:12px; color: gray; margin-top: 2px; margin-left: 10px;">9/28/2024</p>
                </div>
                <div class="star-container">
                    `+
                    getRawStars(review)
                    +`
                </div>  
            </div>
        </div>
        <p style="margin-left: 45px;">
        `+
        review.message
        +`
        </p>
    </div>
    `
})



function getRawStars(cr) {
    let stringBuilder = ""

    // Generate stars and add it in the stringBuilder
    for (let i = 0; i < 5; i++) {
        if (i + 0.5 == cr["star rating"]) {
            stringBuilder += halfStar;
        } else if (i < cr["star rating"]) {
            stringBuilder += fillStar;
        } else {
            stringBuilder += emptyStar;
        }
    }
    return stringBuilder
}

function goBack() {
    window.history.back()
}

