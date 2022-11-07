const cartSvgEl = document.querySelector(".header__div2-svg") 
const cartDropEl = document.querySelector(".main__empty-cart")
const mainBtnEl = document.querySelector(".main__button")

// cartSvgEl.addEventListener("click", () => {
  
//   if(cartDropEl.style.display !== "none") {
//     cartDropEl.style.display = "none"
//   }
//   else {
//     cartDropEl.style.display = "inline"
//   }
  
// })

cartSvgEl.addEventListener("click", () => {
  cartDropEl.classList.toggle("toggle")
  
  // if(cartDropEl.style.visibility !== "hidden") {
  //   cartDropEl.style.visibility = "hidden"
  // }
  //  else {
  //   cartDropEl.style.visibility = "visible"
  //  }
})

// cartSvgEl.addEventListener("click", () => {
  
//   if(cartDropEl.style.visibility !== "hidden") {
//     cartDropEl.classList.toggle("toggle")
//   }
//   else {
//     cartDropEl.style.display = "inline"
//   }
  
// })


