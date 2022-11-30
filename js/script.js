const loadingElement = document.querySelector("#loading");

const resultsContainer = document.querySelector("#result");

async function getAuthor(name) {
    const response = await fetch(`https://openlibrary.org/search/authors.json?q=${name}&offset=0&limit=20`);

    //console.log(response);

    const data = await response.json();

    //console.log(data);
}

getAuthor('harry');