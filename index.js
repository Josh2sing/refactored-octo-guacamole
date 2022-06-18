var inputbox = document.getElementById("main-input")
var subbtn = document.getElementById("sub-btn")
var placeholder = document.getElementById("placeholder")
var log = document.getElementById('AAA')
var currAuctions = []
var data
var link = "https://api.hypixel.net/skyblock/auctions"

inputbox.addEventListener('keyup', logKey)
function logKey(e) {
    log.textContent = inputbox.value
  }
//Get data place it somewhere
//Update html elements
function getData(){
    call();
    totalAuctions = data["totalAuctions"]
    var auctions = data["auctions"]
    for(i = 0; i < totalAuctions; i++){
        if(auctions[i]["bin"]){
            item_price = data["auctions"][i]["starting_bid"]
            item_title = data["auctions"][i]["item_name"]
            var itemTitle = document.createElement("p")
            itemTitle.innerHTML = item_title + " " + i
            var itemContainer = document.createElement("div")
            itemContainer.appendChild(itemTitle)
            placeholder.appendChild(itemContainer)
            itemContainer.classList.add("item")
        }
    }
}

function call(){
    fetch(link)
    .then( res => res.json() )
    .then(response => {
        data = response
    }) 
    .catch(error => console.error('Error:', error));
}