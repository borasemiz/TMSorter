const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const getMessages = require('./get-messages');
const parser = require('./parser');
const sorter = require('./sorter');
const { printToFile } = require('./printer');

async function app(token, pages = 1) {
    try {
        const pageContents = await getMessages(token, pages);
        const extractedMessages = pageContents.flatMap(content => parser(content));
        const sorted = sorter(extractedMessages);
        printToFile(
          path.resolve(process.cwd(), 'messages.txt'),
          sorted
        );
    } catch (e) {
        console.error(e);
    }
}

if (argv.token) {
    app(argv.token, argv.pages ?? 1);
} else {
    console.error('Please provide your Travian JWT token in --token option');
}