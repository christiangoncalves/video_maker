const readline = require('readline-sync');
const robots = {
    text: require('./Robots/text.js'),
    // image: require('./Robots/images'),
    // video: require('./Robots/video'),
}

async function start(){
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    await robots.text(content);

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikepedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
        const selectedPrefixText = prefixes[selectedPrefixIndex];
        
        return selectedPrefixText;  
    }

    console.log(content);
}
    start();