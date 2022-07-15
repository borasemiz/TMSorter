module.exports = function (messages) {
  return messages.sort((message1, message2) => message1.sender.toLowerCase() > message2.sender.toLowerCase() ? 1 : -1);
}