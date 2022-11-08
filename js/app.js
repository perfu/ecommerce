const cartSvgEl = document.querySelector(".header__div2-svg") 
const cartDropEl = document.querySelector(".main__empty-cart")
const mainBtnEl = document.querySelector(".main__button")

let i = 0;

cartSvgEl.addEventListener("click", () => {

  if(i === 0) {
    console.log(i + " toggleDown")
    cartDropEl.classList.toggle("toggleDown")
    cartDropEl.style.visibility = "visible"
    i++
    console.log(i + " visible")
  }
  else if(i === 1){
    console.log(i + " toggleUp")
    cartDropEl.classList.toggle("toggleUp")
    cartDropEl.style.visibility = "visible"
    i = 0
    console.log(i + " toggle")
  }
  else {
    console.log("error!")
  }
  console.log(i + " end")
})

