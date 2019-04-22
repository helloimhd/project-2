function validateGames() {
    var x = document.forms["gameSelection"]["games_id"];

    let checkedArray = [];
    for (i = 0; i < x.length; i++) {
        if (x[i].checked === true) {
            checkedArray.push(x[i].value)
        }
    }

    if (checkedArray.length !== 4) {
        alert("Please select 4 games!")
    }
}

const chooseGamesButton = document.getElementById("chooseGamesButton");
chooseGamesButton.addEventListener("click", validateGames);