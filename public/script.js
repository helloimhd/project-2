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
    for (let i = 0; i < items.length; i++) {
        let gameName = items[i].getElementsByTagName("name")[0].getAttribute("value");
        let gameId = items[i].getAttribute("id");
        console.log(gameId)

        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = `addGames/${gameId}`;
        // put link inside li
        a.innerHTML = gameName;
        li.appendChild(a);

        //  storing game id
        li.id = gameId;
        ul.appendChild(li);
    }
    body.appendChild(ul);
};

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", doSearch);

// var getGameDetails = () => {
//     document.
// }  // end of get game details