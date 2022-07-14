const { JSDOM } = require('jsdom');

module.exports = function (htmlOfPage) {
    const dom = new JSDOM(htmlOfPage);
    const tableRows = dom.window.document.querySelectorAll('#overview tr');

    return Array.from(tableRows);
}