const help = `<pre>cat            Displays content of my files.
clear/cls      clear the screen
github         Goto my github account.
ifconfig       Display my address and contact detail.
ls             Display structure of my modal.
resume         Open my resume in new tab
</pre>`

const welcome = `
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
const lscommand = `<pre>drwxrwxrwx    1 root     root           512 Oct 16 06:47 .
drwxr-xr-x    6 root     root          4096 Mar  2  2022 ..
drwxrwxrwx    1 root     root           512 Sep  8  1989 Brain
drwxrwxrwx    1 root     root           512 Sep  8  1989 App(x86)
drwxrwxrwx    1 root     root           512 Jun 14  2022 SQL
d--x--x--x    1 root     root           512 Sep  8  1989 System Volume Information
drwxrwxrwx    1 root     root           512 Jan 20 02:43 NodeJS
dr-xr-xr-x    1 root     root           512 Sep 12  2015 System Administration
drwxrwxrwx    1 root     root           512 Sep 22  2022 React
drwxrwxrwx    1 root     root           512 Mar  7  2012 Customer Support
drwxrwxrwx    1 root     root           512 Aug 30 16:43 readme.txt</pre>`

const ifconfig = `<pre>eth0: dob=08 &lt; SEPTEMBER &gt; 1989
      ether 09:82:10:20:15  From Vietnam  (Hanoi)
      linkedin /in/phuong89 (Business)
      facebook /pskg89 (Personal)
      tel (vietnam) 098 210 2015 (8hx7d)
      device interrupt 20  memory 0xf7c00000-f7c20000 </pre>`


const readme = `<pre>PLEASE DON'T THINK SERIOUS ABOUT THIS
This project give you a small portion about what i'm working on. 
Terminal is essential tool for an IT engineer.
This is a small mod of https://github.com/terminal-js.
</pre>`