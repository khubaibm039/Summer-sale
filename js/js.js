let total = 0;

function handleClick(target) {
    const elemententry = document.getElementById('element-entry');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    // console.log(itemName)
    const li = document.createElement('li');
    li.innerText = itemName;
    elemententry.classList.add('list-decimal', 'ml-10')
    elemententry.appendChild(li);
    // console.log(target.childNodes[3].childNodes[5].innerText.split(' ')[0])
    const moneyStr = target.childNodes[3].childNodes[5].innerText.split(' ')[0]
    const money = Number(moneyStr)
    total += money;





    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = total
    const totals = document.getElementById("total")
    totals.innerText = totalPrice.innerText
    const makePurchase = document.getElementById('make-purchase')

    if (totalPrice.innerText > 0) {
        makePurchase.removeAttribute('disabled')
    }







    const applyButton = document.getElementById('apply-btn');

    document.getElementById('input-promo').addEventListener('keyup', function (event) {
        const inputPromoValue = event.target.value;

        console.log(inputPromoValue);
        if (inputPromoValue === 'SELL200' && totalPrice.innerText >= 200) {
            applyButton.removeAttribute('disabled');

        }
        else {
            applyButton.setAttribute('disabled', true);
        }
    });






    applyButton.addEventListener('click', function () {
        document.getElementById("input-promo").value = "";
        const discountPrice = document.getElementById("discount-price")
        const totals = document.getElementById("total")

        const discount = (totalPrice.innerText) * 20 / 100;
        discountPrice.innerText = discount
        const totalPrices = totalPrice.innerText - discount
        totals.innerText = totalPrices
    })
}







