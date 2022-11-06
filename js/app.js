const cartSvgEl = document.querySelector(".header__div2-svg") 
const cartDropEl = document.querySelector(".main__empty-cart")

cartSvgEl.addEventListener("click", () => {
  
  if(cartDropEl.style.display !== "none") {
    cartDropEl.style.display = "none"
  }
  else {
    cartDropEl.style.display = "inline"
  }
  
})


