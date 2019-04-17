let body = document.body;

var parser = (data) => {
    var parser, xmlDoc
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");
    return xmlDoc;

}

var doSearch = () => {
    console.log("it goes inside search")
    var input = document.querySelector('#game-search');
    console.log(input.value);

    var req = new XMLHttpRequest();
    req.open("GET", `https://www.boardgamegeek.com/xmlapi2/search?query=${input.value}`, false);
    //req.open("GET", "https://www.boardgamegeek.com/xmlapi2/thing?id=013", false);

    req.send(null);
    let data = req.responseText

    let xmlDoc = parser(data);
    //console.log(xmlDoc);

    //  create and array of the items
    const items = xmlDoc.getElementsByTagName("item");

    //  create a list from items and link it to game details, so a list of a tag
    // need to store id also
    let ul = document.createElement("ul");
    ul.id = "gameList";
    for (let i = 0; i < items.length; i++) {
        let gameName = items[i].getElementsByTagName("name")[0].getAttribute("value");
        let gameId = items[i].getAttribute("id");
        console.log(gameId)

        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = `addGames/${gameId}`;
        // put link inside li
        //a.id = gameId;
        a.innerHTML = gameName;
        li.appendChild(a);

        //  storing game id
        li.id = gameId;
        ul.appendChild(li);
    }
    body.appendChild(ul);
};

//  get game details from request and display it on the form
var getGameDetails = () => {
    // get id from page
    let gameId = parseInt(document.getElementById("gameId").textContent);
    console.log(gameId)

    // get game details first
    var req = new XMLHttpRequest();
    req.open("GET", `https://www.boardgamegeek.com/xmlapi2/thing?id=${gameId}`, false);

    req.send(null);
    let data = req.responseText
    let xmlDoc = parser(data);
    console.log(xmlDoc);

    // get name
    let name = xmlDoc.querySelector("name");
    let gameName = name.getAttribute("value");
    console.log(gameName);

    // get image
    let imgLink = xmlDoc.querySelector("image").innerHTML;
    console.log(imgLink)

    // get min and max players
    let min = xmlDoc.querySelector("minplayers");
    let minPlayers = parseInt(min.getAttribute("value"));

    let max = xmlDoc.querySelector("maxPlayers");
    let maxPlayers = parseInt(max.getAttribute("value"));

    // get playing time
    let minDuration = parseInt(xmlDoc.querySelector("minplaytime").getAttribute("value"));
    let maxDuration = parseInt(xmlDoc.querySelector("maxplaytime").getAttribute("value"));

    // get description
    let description = xmlDoc.querySelector("description").innertHtml;


    //  put inside the form
    document.querySelector("name").value = gameName;
    document.querySelector("img").value = imgLink;
    document.querySelector("min_players").value = minPlayers;
    document.querySelector("max_players").value = maxPlayers;
    document.querySelector("min_duration").value = minDuration;
    document.querySelector("max_duration").value = maxDuration;
    document.querySelector("description").value = description;
}  // end of get game details

//getGameDetails()


var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", doSearch);

// var gameList = document.getElementById("gameList");
// gameList.addEventListener("click", getGameDetails)