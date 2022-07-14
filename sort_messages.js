const fs = require('fs');
const path = require('path');
const http = require('https');

const request = http.request({
  host: 'ts7.x1.europe.travian.com',
  path: '/messages',
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
    "cookie": "JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NTc3NTI0ODgsInByb3BlcnRpZXMiOnsic2FsdCI6IjU5amJabG51cjBEcW1ZNzJ6ZkUyVDRjVG9nQTJoeDhaIiwiaGFzaCI6IjZmNjE2ZjYxNmY2MTZmNjFxUWxBOGJoNFppY1FXdGQ0IiwibG9naW5JZCI6MjkzNDgxLCJtb2JpbGVPcHRpbWl6YXRpb25zIjpmYWxzZSwibGFuZ3VhZ2UiOiJ0ci1UUiIsInZpbGxhZ2VQZXJzcGVjdGl2ZSI6InBlcnNwZWN0aXZlUmVzb3VyY2VzIiwidXVpZCI6IjcwOWZmMDAwLWYxNmEtMTFlYy02NTA3LTAxMDAwMDAwMTZmNiIsInB3IjoiNDBjOWJmZGQyNzVmOTNhZmY4NWYwYzMxNWYyYzhlYzI2OGE0ZjcyOCJ9fQ.MmwCRZ3gosQGiWGrmcqJAScCkDtCKDQ3QwSUnFecGs00r_uFxL1GCknTGtGlsz2mqt3HiXIkFonmByiZlCHoxQJtdSemaym4gSymH7M_aknXr712Ws5RC2KVgjiP6Tn_ayt3G7DKXJ6w_AtHABgnv3jXppIWqpI8MSP5DDYalYastsImm2peRUnbN-UfuAdEFzB7tj4-wjgFhgO7yDev9ybVAsQ9uq_ukM7BkuVdlYBkNdxATMU1z4JC3yHXmIQxDuJGKJqQZ23HOiWOAmdXwc2a_BiW4gLKnsqHKJpELOmBKcCL3jzL9ED8gJ4GkJg6YRpuAQWetbnphg05TSh0Fw"
  }
}, res => {
  const writeStream = fs.createWriteStream(path.resolve(__dirname, 'messages.html'), { encoding: 'utf-8' });

  res.on('data', d => {
    writeStream.write(d);
  });

  res.on('end', () => writeStream.close());
});

request.on('error', error => {
  console.error(error);
});

request.end();
