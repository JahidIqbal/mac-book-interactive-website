// Extra memory cost part
const addEightGb = document.getElementById("eight-gb");
addEightGb.addEventListener("click", function () {
    calculateEightMemory();
    calculateTotal();
});

function calculateEightMemory() {
    const extraMemoryCost = 0;
    document.getElementById("memory-cost").innerText = extraMemoryCost;
}

const addSixteenGb = document.getElementById("sixteen-gb");
addSixteenGb.addEventListener("click", function () {
    calculateSixteenMemory();
    calculateTotal();
});

function calculateSixteenMemory() {
    const extraMemoryCost = 180;
    document.getElementById("memory-cost").innerText = extraMemoryCost;
}



// extra storage cost part
const addFirstStorage = document.getElementById('first-storage');
addFirstStorage.addEventListener('click', function () {
    calculateFirstStorage();
    calculateTotal();
})
function calculateFirstStorage() {
    const extraStorageCost = 0;
    document.getElementById('storage-cost').innerText = extraStorageCost;
}

const addSecondStorage = document.getElementById('second-storage');
addSecondStorage.addEventListener('click', function () {
    calculateSecondStorage()
    calculateTotal();
})
function calculateSecondStorage() {
    const extraStorageCost = 100;
    document.getElementById('storage-cost').innerText = extraStorageCost;
}

const addThirdStorage = document.getElementById('third-storage');
addThirdStorage.addEventListener('click', function () {
    calculateThirdStorage();
    calculateTotal();
})

function calculateThirdStorage() {
    const extraStorageCost = 180;
    document.getElementById('storage-cost').innerText = extraStorageCost;
}


// Delivery charge part
const firstDeliveryCharge = document.getElementById('first-delivery');
firstDeliveryCharge.addEventListener('click', function () {
    calculateFirstDelivery();
    calculateTotal();
})
function calculateFirstDelivery() {
    const deliveryChargeFee = 0;
    document.getElementById('Delivery Charge-Total').innerText = deliveryChargeFee;
}
const secondDeliveryCharge = document.getElementById('second-delivery');
secondDeliveryCharge.addEventListener('click', function () {
    calculateSecondDelivery();
    calculateTotal();
})
function calculateSecondDelivery() {
    const deliveryChargeFee = 20;
    document.getElementById('Delivery Charge-Total').innerText = deliveryChargeFee;
}


// total price part
function calculateTotal() {

    const memorycostNumber = parseInt(document.getElementById("memory-cost").innerText);
    const storageCostNumber = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCostNumber = parseInt(document.getElementById('Delivery Charge-Total').innerText);
    const bestPriceNumber = parseInt(document.getElementById("best-price").innerText);
    document.getElementById('total-price').innerText = memorycostNumber + storageCostNumber + deliveryCostNumber + bestPriceNumber;
}




