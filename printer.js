const fs = require('fs');

module.exports.printToFile = function(filePath, messages) {
  const fileContents = messages.map(message => `${message.sender} | ${message.subject} | ${message.link} | ${message.date}`).join(
    process.platform === 'win32' ? '\r\n' : `\n`
  );

  fs.writeFileSync(
    filePath,
    fileContents,
    { encoding: 'utf-8' }
  );
};