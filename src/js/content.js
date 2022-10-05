function init() {
    // clean the body
    // add logo
    // add input box
    // add search button
    // on search button click
    document.body.innerHTML = '';
    let searchButton = document.createElement('button');
    searchButton.setAttribute('id', 'cleanYTSearchBtn');
    searchButton.classList.add('search-btn');
    searchButton.innerHTML = 'Search YouTube';

    document.body.appendChild(searchButton);
}

init();
