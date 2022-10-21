let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];

const COMMANDS = {
  github: null,
  cls: null,
  clear: null,
  history: null,
  help: `<pre>cat            Displays content of my files.
clear/cls      clear the screen
github         Goto my github account.
ifconfig       Display my address and contact detail.
ls             Display structure of my modal.
projects       Display all of my project as developer till now
</pre>`,
  cat: `Usage: cat [FILE]...`,
  ifconfig: `<pre>eth0: dob=08 &lt; SEPTEMBER &gt; 1989
      ether 09:82:10:20:15  From Vietnam  (Hanoi)
      linkedin /in/phuongpham89 (Business)
      facebook /pskg89 (Personal)
      tel (vietnam) 098 210 2015 (8hx7d)
      device interrupt 20  memory 0xf7c00000-f7c20000 </pre>`,
  "cat readme.txt": `<pre>PLEASE DON'T THINK SERIOUS ABOUT THIS
This project give you a small portion about what i'm working on. 
Terminal is essential tool for an IT engineer.
This is a small mod of https://github.com/terminal-js.
</pre>`,
  ls: `<pre>drwxrwxrwx    1 root     root           512 Oct 16 06:47 .
drwxr-xr-x    6 root     root          4096 Mar  2  2022 ..
drwxrwxrwx    1 root     root           512 Oct 20 09:22 App
drwxrwxrwx    1 root     root           512 Aug 13 17:11 App(x86)
drwxrwxrwx    1 root     root           512 Jun 14 09:52 SQL2019
d--x--x--x    1 root     root           512 Mar  2  2022 System Volume Information
drwxrwxrwx    1 root     root           512 Aug 20 02:43 UltraViewer
dr-xr-xr-x    1 root     root           512 Jul 18 14:17 VirtualStore
drwxrwxrwx    1 root     root           512 Sep 12 04:08 react
drwxrwxrwx    1 root     root           512 Mar  7  2022 synaptics touchpad
drwxrwxrwx    1 root     root           512 Aug 30 16:43 xampp</pre>`,

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
  if (input == "projects") {
    open("pages/projects.html");
  } else if (input === "clear" || input === "cls") {
    clearScreen();
  } else if (input === "history") {
    showHist();
  } else if (input === "github") {
    open("https://github.com/phuopham?tab=repositories");
  } else {
    output = `<div class="terminal-line"><span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">command not found: ${input}</div>`;
    } else {
      output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
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
    this.innerHTML = `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/3f2db6afb6.js" crossorigin="anonymous"></script>
    <div class="terminal_window" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div>
    <div class="fakeScreen">
      <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
        <div class="terminal-output" id="terminalOutput">
          <div class="terminal-line">
            <pre>      :::::::::  :::    ::: :::    :::  ::::::::  ::::    :::  :::::::: 
     :+:    :+: :+:    :+: :+:    :+: :+:    :+: :+:+:   :+: :+:    :+: 
    +:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+ :+:+:+  +:+ +:+         
   +#++:++#+  +#++:++#++ +#+    +:+ +#+    +:+ +#+ +:+ +#+ :#:          
  +#+        +#+    +#+ +#+    +#+ +#+    +#+ +#+  +#+#+# +#+   +#+#    
 #+#        #+#    #+# #+#    #+# #+#    #+# #+#   #+#+# #+#    #+#     
###        ###    ###  ########   ########  ###    ####  ########       
            </pre>
            <br>
            <span class="help-msg"> Welcome, welcome. Let explore me. Execute <span class="help">help</span> for all commands </span>
          </div>
        </div>
        <div class="terminal-line">
          <span class="directory">~</span>
          <pre class="user-input" style="display:inline;font-family: unset;" id="userInput"></pre>
          <span class="line anim-typewriter"></span>
          <input type="text" id="keyboard" class="dummy-keyboard" />
        </div>
      </div>
    </div>
  </div>
  `
  }
}

customElements.define("terminal-js", Terminal);