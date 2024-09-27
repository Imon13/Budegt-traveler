// function handleButoon(event){
//     console.log(event.target.parentNode.parentNode.childNodes[1].innerText)
// }
const allBtn = document.getElementsByClassName('add-btn')
let count = 0;
// console.log(allBtn)
for (const btn of allBtn) {
    btn.addEventListener("click",function(e){
        count = count+1;
        console.log(count)
       setInnerText('cart-count',count)
       const placeName = e.target.parentNode.childNodes[1].innerText
       console.log(placeName)
       const placePrice =e.target.parentNode.childNodes[3].childNodes[1].innerText
       console.log(placePrice)
       const selectedContainer = document.getElementById('selected-place-container')
       const li = document.createElement('li')
       const p = document.createElement('p')
       p.innerText = placeName
       const p2 = document.createElement('p')
       p2.innerText =`${placePrice}$`
       li.appendChild(p)
       li.appendChild(p2)
       selectedContainer.appendChild(li)
    })
    
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value

}