const Box = require("cli-box");
const inquirer = require("inquirer");

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
},`
▸ Name      :   Grill
▸ Age       :   16
▸ Location  :   Switzerland
▸ Website   :   http://devgrill.me`);
console.log(myBox.stringify());


inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do now?",
      choices: ["contact me", "invite my bot", "view my github", "visit my website", "exit"]
    }
  ])
  .then((answers) => { 
    switch (answers.action){
      case "contact me":
        break;

      case "invite my bot":
        break;

      case "view my github":
        break;

      case "visit my website":
        break;

      case "exit":
        break;
    }
  });