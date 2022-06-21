var inputbox = document.getElementById("main-input")
var subbtn = document.getElementById("sub-btn")
var placeholder = document.getElementById("placeholder")
var log = document.getElementById('AAA')
var currAuctions = []
var items = []
var data
var link = "https://api.hypixel.net/skyblock/auctions"

call();

inputbox.addEventListener('keyup', logKey)
function logKey(e) {
    log.textContent = inputbox.value
}

//Create new objects everytime search is searched

//Get data place it somewhere
//Update html elements

function getData(){
    totalAuctions = data["totalAuctions"]
    var auctions = data["auctions"]
    for(i = 0; i < totalAuctions; i++){
        if(auctions[i]["bin"]){
            createItem();
        }
    }
}

function createItem(){
    item_price = data["auctions"][i]["starting_bid"]
    item_title = data["auctions"][i]["item_name"]
    item_UUID = data["auctions"][i]["uuid"]
    

    //Create p tag
    var itemTitle = document.createElement("p")
    var itemUUID = document.createElement("p")
    var itemUUID = document.createElement("p")
    var itemPrice = document.createElement("p")

    //populate p
    itemTitle.innerHTML = i + " " + item_title
    itemUUID.innerHTML =  item_UUID
    itemPrice.innerHTML = item_price

    //Change p CSS
    itemUUID.classList.add("UUID")
    itemPrice.id = ("price-" + i)

    //Create div and add p to div
    var itemContainer = document.createElement("div")
    itemContainer.appendChild(itemTitle)
    itemContainer.appendChild(itemUUID)
    itemContainer.appendChild(itemPrice)
    placeholder.appendChild(itemContainer)
    itemContainer.classList.add("item")
    itemContainer.id = ("item-" + i)
}

function updateData(){
    //Loop through each ID and make content = new content
}

function sortPrice(){
    //Loop through each ID and organize by priceCost
    partition()
}

/* 
1. Initialize content
2. Update Content
*/

function call(){
    fetch(link)
    .then( res => res.json() )
    .then(response => {
        data = response
        getData();
    }) 
    .catch(error => console.error('Error:', error));
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}