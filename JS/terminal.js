let userInput, terminalOutput;
let projAsk = true;
let lastCommands = [];

const COMMANDS = {
  github: null,
  cls: null,
  clear: null,
  history: null,
  help: help,
  cat: `Usage: cat [FILE]...`,
  ifconfig: ifconfig,
  "cat readme.txt": readme,
  ls: lscommand,

};

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("keyboard").focus();
};

const execute = function executeCommand(input) {
  input = input.toLowerCase();
  lastCommands.push(input);
  let output;
  if (input.length === 0) {
    return;
  }
  if (input.indexOf("sudo") >= 0) {
    input = "sudo";
  }
  switch (input) {
    case "projects":
      open("pages/projects.html");
      break;
    case "clear":
    case 'cls':
      clearScreen()
      break
    case "history":
      showHist();
      break;
    case "github":
      open("https://github.com/phuopham")
      break;
    case 'resume':
      open('https://phuopham.github.io/resume')
      break;
    default:
      output = `<div class="terminal-line"><span class="directory">~</span> ${input}</div>`;
      if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">command not found: ${input}</div>`;
      } else {
        output += COMMANDS[input];
      }

      terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  // if (input == "projects") {
  //   open("pages/projects.html");
  // } else if (input === "clear" || input === "cls") {
  //   clearScreen();
  // } else if (input === "history") {
  //   showHist();
  // } else if (input === "github") {
  //   open("https://github.com/phuopham?tab=repositories");
  // } else {
  //   output = `<div class="terminal-line"><span class="directory">~</span> ${input}</div>`;
  //   if (!COMMANDS.hasOwnProperty(input)) {
  //     output += `<div class="terminal-line">command not found: ${input}</div>`;
  //   } else {
  //     output += COMMANDS[input];
  //   }

  //   terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  //   terminalOutput.scrollTop = terminalOutput.scrollHeight;
  // }
};

const key = (e) => {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }
  // if (e.key === " ") {
  //   console.log('here')
  //   userInput.innerHTML += ` `
  // } else {
  userInput.innerHTML = input + e.key;

  // }
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

function showHist() {
  terminalOutput.innerHTML = `${terminalOutput.innerHTML
    }<div class="terminal-line">${lastCommands.join(", ")}</div>`;
}

let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
  if (e.key === "Tab") {
    const input = userInput.innerHTML;
    e.preventDefault();
    let autocomplete = Object.entries(COMMANDS).filter(([key]) => key.includes(input))
    if (autocomplete.length == 1) {
      userInput.innerHTML = autocomplete[0][0];
    }
  }
};

function clearScreen() {
  location.reload();
}
document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);


class Terminal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = welcome
  }
}

customElements.define("terminal-js", Terminal);