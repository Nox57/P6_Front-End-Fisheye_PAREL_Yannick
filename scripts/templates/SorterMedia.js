function FilterMedia() {

}


// Par popularité
function sortFunction(a, b) {
    if (a["likes"] === b["likes"]) {
        return 0;
    }
    else {
        return (a["likes"] > b["likes"]) ? -1 : 1;
    }
}

// Par Date (du plus récent au plus vieux)
function sortFunction(a, b) {
    if (a["date"] === b["date"]) {
        return 0;
    }
    else {
        return (a["date"] > b["date"]) ? -1 : 1;
    }
}

// Par titre (de A à Z)
function sortFunction(a, b) {
    if (a["title"] === b["title"]) {
        return 0;
    }
    else {
        return (a["title"] < b["title"]) ? -1 : 1;
    }
}