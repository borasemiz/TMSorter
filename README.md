# Travian Message Sorter

I created this script because of the difficulty involved finding messages in the Travian's inbox. One of the alliance leaders' pain points is to find messages in million of messages in the inbox. This scripts helps them to get messages from the inbox and groups them by the sender, alphabetically.

## Setting Up

In order to run this little program, you are going to need to get [Node.js](https://nodejs.org/en/) version 16 and more. Download Node.js and install it according to your operating system. If you are using Windows, don't forget to tick the "Add to PATH" option in the installer.

Once you installed Node.js, clone this repository to your own computer. If you aren't familiar with what "cloning" is, you can use the "Code" button that this just top right corner and click "Download ZIP".

Once you cloned/downloaded, open up a command terminal and go inside the directory of what you downloaded. Execute the following command there:

```shell
npm install
```

Once you did that, you are ready to run this little program. Don't close the command terminal yet!

## Running

You are going to need your Travian login JWT token to use this program. Otherwise, it cannot fetch your message. This token is given to you from the Travian server upon logging in. Every request that you send to their server includes this token as a mechanism of authentication. That is how Travian know who you are.

### Acquiring Token

In order to get your JWT token, open up your browser and login to your Travian account. Once you logged in, you need to open up your browser's developer tools. Openning dev tools is different for each browser. Therefore, I am only going to explain the Chrome based browser, such as Google Chrome, Edge or Brave.

Right click anywhere in the page and click on the "Inspect". This will open up a window inside your browser. This window is the developer tools. From here, go to the "Application" tab. If you cannot find the "Application" tab visible in the tabs, click on the ">>" symbol and find it from there.

![img.png](devtools.png)

After that, expand the "Cookies" section and click on the thing which has your server name on it. Then, you will see the "JWT" entry in the middle. Click on that, and it will show you your token below. Copy that token.

![img.png](token.png)

Now that you acquired your token, you can run this script.

### Executing the Program

In your command terminal, give the following command:

```
node app.js --token {your_token_you_just_copied} --pages {how many pages. It is 1 by default}
```

Replace this `{your_token_you_just_copied}` with the token you copied. If you want to fetch several pages, type that to just next to `--pages` parameter. So, at the end, it should look something like this:

```shell
node app.js --token eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NTc4ODY2MDsInByb3BlcnRpZXMiOnsic2FsdCI6ImljTGpyMU9VUkEyQ1lGMWRENGRDOHBNQlpKdU05Y2dvIiwiaGFzaCI6IjZmNjE2ZjYxNmY2MTZmNjFxUWxBGJoNFppY1FXdGQ0IiwibG9naW5JZCI6MzE1MzgyLCJtb2JpbGVPcHRpbWl6YXRpb25zIjpmYWxzZSwibGFuZ3VhZ2UiOiJ0ci1UUiIsInZpbGhZ2QZXJzcGVjdGl2ZSI6InBlcnNwZWN0aXZlQnVpbGRpbmdzIiwidXVpZCI6IjcwOWZmMDAwLWYxNmEtMTFlYy02NTA3LTAxMDAwMDAwMTZmNiIsInB3IjoiNDBjOWJmZGQyNzVmOTNhZmY4NWYwYzMxNWYyYzhlYzI2OGE0ZjcyOCJ9fQ.WuLhatk5MgEL7kCr6JC7KECrE5t14WdtKDi0rFvcNSvVPIrFkhWIA1W7T9_y4g1slx-O8BBwoomAew1UVSKwZU-uFwowGlWcMt1vvzN_Ch5gV0k4fDatwqICtFmjHN3_q4lcUW32LswCtVtsH2H9kwHDl5mO48SDoxZEnEhKYwnXwDPAgUtCpwKjZNTzYYhhx-ldR7Ox5TRdskcxBh9kFgwPB_xHp71Uife505xpCnslVtSDPsu_O0y9hwj3ev8_tNETauj9jE86u6wO_1TR39sJRCYKqI4R4k2eU2rmG_AA6SkrHoxy5th09XYUc7eKvIp4K6nnBz-64Eg --pages 3
```

This command will fetch 3 pages from your inbox, group messages by the sender, and create a `messages.txt` file in the directory where you execute this command. This `messages.txt` will contain the ordered messages.

Enjoy :)