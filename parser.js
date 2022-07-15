const { JSDOM } = require('jsdom');

function extractMessageEntries(tableRows) {
    return tableRows.map(row => {
        const subject = row.querySelector('td.subject a:last-child').innerHTML;
        const sender = row.querySelector('td.send a').innerHTML;
        const date = row.querySelector('td.dat').innerHTML;
        const link = row.querySelector('td.subject a:last-child').href;

        return {
            subject,
            sender,
            date,
            link: `https://ts7.x1.europe.travian.com${link}`
        };
    });
}

module.exports = function (htmlOfPage) {
    const dom = new JSDOM(htmlOfPage);
    const tableRows = dom.window.document.querySelectorAll('#overview tr');

    return extractMessageEntries(Array.from(tableRows).slice(1));
}