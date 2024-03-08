const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getQuote = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote()