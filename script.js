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
    })
    
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value

}