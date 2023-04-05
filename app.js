process.stdin.resume();
process.stdin.setEncoding('utf-8');

console.log('How old are you?');
process.stdin.on('data', (text) => { 
    year = new Date().getFullYear();
    if (text < 0) {
        console.log("Error: Age cannot be negative");
    } else if (text > 99) {
        console.log("Error: Age cannot be greater than 99");
    } else {
        let birthYear = year - text;
        console.log('You are ' + text + ' years old. You were born in ' + birthYear + '.');
    }
    process.exit();
});