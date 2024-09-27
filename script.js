// function handleButoon(event){
//     console.log(event.target.parentNode.parentNode.childNodes[1].innerText)
// }
const allBtn = document.getElementsByClassName('add-btn')
let count = 0;
// console.log(allBtn)
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        console.log(count)
        setInnerText('cart-count', count)
        const placeName = e.target.parentNode.childNodes[1].innerText
        console.log(placeName)
        const placePrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
        console.log(placePrice)
        const selectedContainer = document.getElementById('selected-place-container')
        const li = document.createElement('li')
        const p = document.createElement('p')
        p.innerText = placeName
        const p2 = document.createElement('p')
        p2.innerText = `${placePrice}$`
        li.appendChild(p)
        li.appendChild(p2)
        const budgetString = document.getElementById('budget').innerText
        const budget = parseFloat(budgetString)
        if(budget-parseFloat(placePrice) <0){
            alert('Low bugdet')
            return
        }
        document.getElementById('budget').innerText = budget - parseFloat(placePrice)
        selectedContainer.appendChild(li)
        totalCost('total-cost', parseFloat(placePrice));
        grandTotal()


    })

}
function totalCost(id, value) {
    const totalCostString = document.getElementById(id).innerText
    const totalCost = parseFloat(totalCostString)

    //    document.getElementById('total-cost').innerText = totalCost + parseFloat(placePrice)
    const sum = totalCost + parseFloat(value)
    setInnerText('total-cost', sum)

}
function grandTotal(category) {
    // console.log(category)

    const newtotalCostString = document.getElementById('total-cost').innerText
    const newtotalCost = parseFloat(newtotalCostString)
    console.log(newtotalCost)
    setInnerText('grand-total', newtotalCost)
    if(category == 'bus'){
        setInnerText('grand-total', newtotalCost+100)

    }
    else if(category == 'train'){
        setInnerText('grand-total', newtotalCost-200)

    }
    else if(category == 'flight'){
        setInnerText('grand-total', newtotalCost+500)

    }
   else{
    setInnerText('grand-total', newtotalCost)
   }


}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value

}