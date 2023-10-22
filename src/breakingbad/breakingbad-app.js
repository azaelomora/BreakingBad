/**
 * 
 * @returns {Promise<Object>} quote information
 */

const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    // console.log(data[0]);
    return data;
}



/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async (element) => {
    

    document.querySelector('#app-title').innerHTML = 'BreakingBad App';
    element.innerHTML= 'Loading...';
    // await fetchQuote();


    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        const dataDes = data[0];
        quoteLabel.innerHTML = dataDes.quote;
        authorLabel.innerHTML = dataDes.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    //Añadir Listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);

    });

    fetchQuote()
        .then(renderQuote);
}

