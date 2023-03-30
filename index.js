#! /usr/bin/env node

const Box = require("cli-box");
const inquirer = require("inquirer");
const open = require('open');

var units = {
  year  : 24 * 60 * 60 * 1000 * 365,
  month : 24 * 60 * 60 * 1000 * 365/12,
  day   : 24 * 60 * 60 * 1000,
  hour  : 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

var getRelativeTime = (d1, d2 = new Date()) => {
  var elapsed = d1 - d2

  for (var u in units) 
    if (Math.abs(elapsed) > units[u] || u == 'second'){
      elapsed = Math.ceil(elapsed/units[u]);
      return rtf.format(elapsed, u)
    }
}



function runAction(answers) {
  switch (answers) {
    case "contact me":
      open("mailto:no-email-atm")
      break;

    case "invite my bot":
      open("https://discord.com/api/oauth2/authorize?client_id=819816512901611521&permissions=8&scope=bot%20applications.commands")
      break;

    case "view my github":
      open("https://github.com/DevGrill/")
      break;

    case "visit my website":
      open("http://devgrill.ch/")
      break;

    case "exit":
      process.exit()
  }
  createMenu("Anything else?");
}

function createMenu(displayMessage) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: displayMessage,
        choices: ["contact me", "invite my bot", "view my github", "visit my website", "exit"]
      }
    ])
    .then((answers) => {
      runAction(answers.action);
    });
}

const myBox = new Box({
  w: 50,
  h: 10,
  stringify: false,
  marks: {
    nw: '╭',
    n: '─',
    ne: '╮',
    e: '│',
    se: '╯',
    s: '─',
    sw: '╰',
    w: '│'
  },
  hAlign: 'left',
  wAlign: 'center',
}, `
▸ Joined Earth Server   :   ${getRelativeTime(new Date('03/13/2006'))}
▸ Joined Discord        :   ${getRelativeTime(new Date('10/14/2018'))}
▸ Started Coding around :   ${getRelativeTime(new Date('01/15/2017'))}
▸ My own Website        :   http://devgrill.ch/`);
console.log(myBox.stringify());
createMenu("What do you want to do now?");