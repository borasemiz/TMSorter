const fs = require('fs');
const path = require('path');
const http = require('https');

const { wait } = require('./utilities');

function getSinglePage (token, page = 1) {
    return new Promise((resolve, reject) => {
        const request = http.request({
            host: 'ts7.x1.europe.travian.com',
            path: `/messages/inbox?page=${page}`,
            headers: {
                "authority": "ts7.x1.europe.travian.com",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,tr;q=0.8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.49",
                "referrer": "https://ts7.x1.europe.travian.com/messages/inbox?page=1&id=97779",
                "cookie": `JWT=${token}`
            }
        }, res => {
            let pageContents = '';

            res.on('data', d => {
                pageContents += d;
            });

            res.on('end', () => resolve(pageContents));
        });

        request.on('error', error => {
            reject(error);
        });

        request.end();
    });
}

module.exports = async function (token, pages = 1) {
    const pageContents = [];

    for (let i = 0; i < pages; i++) {
        if (i !== 0) {
            await wait(1500);
        }

        pageContents.push(await getSinglePage(token, i + 1));
    }

    return pageContents;
}