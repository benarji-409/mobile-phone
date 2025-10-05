function checkPassword() {
  let savedpass = "MONEY-IS-EVERYTHING";
  let enterpass = document.getElementById("password").value;
  let face = document.getElementById("face");
  if (enterpass === savedpass) {
    face.innerHTML = `
      <div class="d">
        <div class="unlocked">
          <h3 class="welcome">Welcome User</h3>
        </div>
        <div class="apps">
          <button class="app-btn" onclick="openMusicApp()"><i class="fa-solid fa-music"></i><br>Music</button>
          <button class="app-btn" onclick="openCalculatorApp()"><i class="fa-solid fa-calculator"></i><br>Calculator</button>
          <button class="app-btn" onclick="openPhoneApp()"><i class="fa-solid fa-phone"></i><br>Phone</button>
        </div>
      </div>`;
  } else {
    alert("WRONG PASSWORD! RE-ENTER AGAIN 🔐");
  }
}

function goBackToApps() {
  let face = document.getElementById("face");
  face.innerHTML = `
    <div class="d">
      <div class="unlocked">
        <h3 class="welcome">Welcome User</h3>
      </div>
      <div class="apps">
        <button class="app-btn" onclick="openMusicApp()"><i class="fa-solid fa-music"></i><br>Music</button>
        <button class="app-btn" onclick="openCalculatorApp()"><i class="fa-solid fa-calculator"></i><br>Calculator</button>
        <button class="app-btn" onclick="openPhoneApp()"><i class="fa-solid fa-phone"></i><br>Phone</button>
      </div>
    </div>`;
}

function openMusicApp() {
  let face = document.getElementById("face");
  face.innerHTML = `
    <div class="music-screen">
      <div class="music-header">
        <button class="back-button" onclick="goBackToApps()"><i class="fa-solid fa-arrow-left"></i></button>
        <h2 class="music-app-heading">MUSIC PLAYER</h2>
      </div>
      <img class="arjun-reddy-image" src="arjun reddy2.jpg" alt="arjun-reddy">
      <div class="music-controls">
        <button class="control-btn"><i class="fa-solid fa-backward"></i></button>
        <button class="control-btn"><i class="fa-solid fa-play"></i></button>
        <button class="control-btn"><i class="fa-solid fa-forward"></i></button>
      </div>
    </div>`;
}

function openCalculatorApp() {
  let face = document.getElementById("face");
  face.innerHTML = `
    <div class="calculator-screen">
      <div class="calc-header">
        <button class="back-button" onclick="goBackToApps()"><i class="fa-solid fa-arrow-left"></i></button>
        <h2 class="calc-heading">CALCULATOR</h2>
      </div>
      <input type="text" id="calc-display" class="calc-display" readonly>
      <div class="buttons">
        <button onclick="press('7')">7</button>
        <button onclick="press('8')">8</button>
        <button onclick="press('9')">9</button>
        <button onclick="press('/')">÷</button>
        <button onclick="press('4')">4</button>
        <button onclick="press('5')">5</button>
        <button onclick="press('6')">6</button>
        <button onclick="press('*')">*</button>
        <button onclick="press('1')">1</button>
        <button onclick="press('2')">2</button>
        <button onclick="press('3')">3</button>
        <button onclick="press('-')">-</button>
        <button onclick="press('0')">0</button>
        <button onclick="press('.')">.</button>
        <button onclick="calculate()">=</button>
        <button onclick="press('+')">+</button>
        <button class="clear" onclick="clearDisplay()">C</button>
      </div>
    </div>`;
}

function press(num) {
  document.getElementById("calc-display").value += num;
}

function calculate() {
  try {
    document.getElementById("calc-display").value = eval(document.getElementById("calc-display").value);
  } catch {
    document.getElementById("calc-display").value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("calc-display").value = "";
}

function openPhoneApp() {
  let face = document.getElementById("face");
  face.innerHTML = `
    <div class="phone-app">
      <div class="phone-header">
        <button class="back-button" onclick="goBackToApps()"><i class="fa-solid fa-arrow-left"></i></button>
        <h2 class="phone-app-heading">PHONE</h2>
      </div>
      <input type="text" id="dial-display" class="dial-display" placeholder="Enter Number" readonly>
      <div class="dial-grid">
        <button class="dial-btn" onclick="pressNumber('1')">1</button>
        <button class="dial-btn" onclick="pressNumber('2')">2</button>
        <button class="dial-btn" onclick="pressNumber('3')">3</button>
        <button class="dial-btn" onclick="pressNumber('4')">4</button>
        <button class="dial-btn" onclick="pressNumber('5')">5</button>
        <button class="dial-btn" onclick="pressNumber('6')">6</button>
        <button class="dial-btn" onclick="pressNumber('7')">7</button>
        <button class="dial-btn" onclick="pressNumber('8')">8</button>
        <button class="dial-btn" onclick="pressNumber('9')">9</button>
        <button class="dial-btn" onclick="pressNumber('*')">*</button>
        <button class="dial-btn" onclick="pressNumber('0')">0</button>
        <button class="dial-btn" onclick="pressNumber('#')">#</button>
      </div>
      <div class="call-button-division">
        <button class="call-btn" onclick="makeCall()"><i class="fa-solid fa-phone"></i></button>
      </div>
    </div>`;
}

function pressNumber(num) {
  document.getElementById("dial-display").value += num;
}

function makeCall() {
  let number = document.getElementById("dial-display").value;
  if (number == "") {
    alert("enter the phone number");
    return;
  }
  let face = document.getElementById("face");
  face.innerHTML = `
    <div class="call-screen">
      <h3 class="calling-number">${number}</h3>
      <p class="calling-text">Calling...</p>
      <div class="call-options">
        <button class="option-btn"><i class="fa-solid fa-volume-high"></i><br>Speaker</button>
        <button class="option-btn"><i class="fa-solid fa-keypad"></i><br>Dial Pad</button>
        <button class="option-btn"><i class="fa-solid fa-pause"></i><br>Hold</button>
        <button class="option-btn"><i class="fa-solid fa-microphone-slash"></i><br>Mute</button>
      </div>
      <div class="hangup-division">
        <button class="hangup-btn" onclick="openPhoneApp()"><i class="fa-solid fa-phone-slash"></i></button>
      </div>
    </div>`;
}
