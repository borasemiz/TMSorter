const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const getMessages = require('./get-messages');
const parser = require('./parser');

async function sorter(token, pages = 1) {
    try {
        const pageContents = await getMessages(token, pages);
        const rowsEachPage = pageContents.flatMap(content => parser(content));
        console.log(rowsEachPage);
    } catch (e) {
        console.error(e);
    }
}

if (argv.token) {
    sorter(argv.token, argv.pages ?? 1);
} else {
    console.error('Please provide your Travian JWT token in --token option');
}