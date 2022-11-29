//Declaring a variable to hold the API's endpoint url 
//let's use the example url given, later we'll change it for the user's input value
const url = `https://openlibrary.org/search/authors.json?q=harry&offset=0&limit=50`;

//Selecting elements from html to interact with:
const loadingElement = document.querySelector("#loading");

const postsContainer = document.querySelector("#posts-container");

//Function to get our authors
async function getAuthor() {

    //First promise with response object to check if endpoint is conecting
    const response = await fetch(url);

    //Let's test if our response is 'ok'
    console.log(response);

    //Now let's extract our data from the API call using a JSON object
    const data = await response.json();

    //And let's check what data we got specifically
    console.log(data);

    //Now that we've loaded our data, let's hide our loading element
    loadingElement.classList.add("hide");
};

getAuthor();