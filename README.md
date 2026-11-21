# Ex04 Simple Calculator - React Project
## Date:14-03-2026
## Name : 
## Reg No :

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM

### index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#101321" />
    <meta name="description" content="NovaCalc - A modern scientific calculator built with React." />
    <title>NovaCalc | Smart Scientific Calculator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### index.css
```
html {
  min-width: 320px;
  min-height: 100%;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

button {
  font-family: inherit;
}
```
### App.css

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  padding: 25px 7%;
  font-family: "Segoe UI", Arial, sans-serif;
  transition: 0.3s;
}

.dark {
  background: #101321;
  color: #f5f5ff;
}

.light {
  background: #f1f3fb;
  color: #20243a;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: auto;
  padding: 10px 0 35px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 13px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #8c6cff, #ed78bd);
  color: white;
  font-size: 25px;
  font-weight: 800;
}

.brand h2 {
  font-size: 21px;
}

.brand p,
.small-label,
.display-label {
  font-size: 10px;
  letter-spacing: 2px;
  opacity: 0.55;
  margin-top: 4px;
}

.theme-button {
  border: 1px solid #77777745;
  padding: 11px 17px;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  color: inherit;
}

.main-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(250px, 0.9fr);
  gap: 25px;
  max-width: 1150px;
  margin: auto;
}

.calculator-card,
.history-card {
  border: 1px solid #ffffff13;
  border-radius: 25px;
  padding: 28px;
}

.dark .calculator-card,
.dark .history-card {
  background: #191e30;
  box-shadow: 0 20px 60px #00000025;
}

.light .calculator-card,
.light .history-card {
  background: white;
  box-shadow: 0 15px 45px #30365a12;
  border-color: #e5e7f1;
}

.calculator-heading,
.history-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calculator-heading h1 {
  font-size: 27px;
  margin-top: 8px;
}

.status {
  color: #49d5a0;
  font-size: 11px;
  letter-spacing: 1px;
}

.display {
  margin: 25px 0 18px;
  padding: 23px;
  border-radius: 18px;
  background: #101525;
  color: white;
  min-height: 150px;
  overflow: hidden;
}

.expression {
  font-size: 25px;
  text-align: right;
  min-height: 42px;
  margin-top: 10px;
  overflow-wrap: anywhere;
  color: #c9c5ff;
}

.result-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ffffff20;
  padding-top: 13px;
  margin-top: 12px;
}

.result-area span {
  color: #aaaec1;
  font-size: 10px;
  letter-spacing: 2px;
}

.result-area strong {
  color: #a995ff;
  font-size: 26px;
  overflow-wrap: anywhere;
}

.scientific-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 13px;
}

.scientific-button {
  height: 43px;
  border: 0;
  border-radius: 11px;
  background: #8d78f31b;
  color: #aa99ff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.scientific-button:hover {
  background: #8d78f33d;
  transform: translateY(-2px);
}

.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 11px;
}

.key {
  height: 57px;
  border: 0;
  border-radius: 13px;
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  background: #292f43;
  color: white;
}

.light .key {
  background: #eef0f8;
  color: #272b40;
}

.key:hover {
  transform: translateY(-2px);
  filter: brightness(1.15);
}

.key.utility {
  background: #3a3456;
  color: #c6baff;
}

.light .key.utility {
  background: #e8e2ff;
  color: #7659d6;
}

.key.operator {
  background: #34304e;
  color: #b7a5ff;
}

.light .key.operator {
  background: #e9e4ff;
  color: #7659d6;
}

.key.equals {
  background: linear-gradient(135deg, #8067f5, #b66be7);
  color: white;
  grid-row: span 2;
  height: auto;
}

.key.zero {
  grid-column: span 1;
}

.keyboard-hint {
  text-align: center;
  opacity: 0.45;
  font-size: 11px;
  margin-top: 18px;
}

.history-card {
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.history-heading h2 {
  margin-top: 8px;
  font-size: 24px;
}

.clear-history {
  border: 0;
  background: transparent;
  color: #a995ff;
  cursor: pointer;
  font-size: 13px;
}

.empty-history {
  margin: auto;
  text-align: center;
  padding: 30px 10px;
}

.history-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  margin: auto auto 15px;
  border-radius: 18px;
  background: #8d78f31b;
  color: #a995ff;
  font-size: 28px;
}

.empty-history h3 {
  font-size: 15px;
  margin-bottom: 8px;
}

.empty-history p {
  opacity: 0.5;
  font-size: 12px;
  line-height: 1.6;
}

.history-list {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-item {
  border: 1px solid #88888822;
  background: transparent;
  color: inherit;
  padding: 13px;
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 7px;
  overflow-wrap: anywhere;
}

.history-item span {
  opacity: 0.6;
  font-size: 12px;
}

.history-item strong {
  color: #a995ff;
  font-size: 15px;
}

.history-footer {
  margin-top: auto;
  padding-top: 20px;
  font-size: 11px;
  opacity: 0.5;
}

.history-footer span {
  color: #a995ff;
}

footer {
  text-align: center;
  padding: 30px 0 5px;
  font-size: 10px;
  letter-spacing: 2px;
  opacity: 0.45;
}

footer span {
  color: #a995ff;
}

@media (max-width: 750px) {
  .app {
    padding: 18px;
  }

  .main-layout {
    grid-template-columns: 1fr;
  }

  .history-card {
    min-height: 280px;
  }

  .calculator-card,
  .history-card {
    padding: 20px;
  }
}

@media (max-width: 400px) {
  .calculator-heading h1 {
    font-size: 21px;
  }

  .key {
    height: 49px;
  }
}
```
### App.jsx
```
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const buttons = [
    ["AC", "DEL", "%", "÷"],
    ["sin", "cos", "tan", "×"],
    ["7", "8", "9", "−"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "(", ")"]
  ];

  const scientificButtons = [
    ["√", "log", "ln", "π"],
    ["x²", "x³", "^", "e"]
  ];

  const insertValue = (value) => {
    const symbols = {
      "×": "*",
      "÷": "/",
      "−": "-"
    };

    if (value === "AC") {
      setExpression("");
      setResult("0");
      return;
    }

    if (value === "DEL") {
      setExpression((previous) => previous.slice(0, -1));
      return;
    }

    if (value === "=") {
      calculate();
      return;
    }

    if (value === "√") {
      setExpression((previous) => previous + "sqrt(");
      return;
    }

    if (value === "x²") {
      setExpression((previous) => previous + "**2");
      return;
    }

    if (value === "x³") {
      setExpression((previous) => previous + "**3");
      return;
    }

    if (value === "π") {
      setExpression((previous) => previous + "Math.PI");
      return;
    }

    if (value === "e") {
      setExpression((previous) => previous + "Math.E");
      return;
    }

    if (value === "log") {
      setExpression((previous) => previous + "log10(");
      return;
    }

    if (value === "ln") {
      setExpression((previous) => previous + "log(");
      return;
    }

    if (["sin", "cos", "tan"].includes(value)) {
      setExpression((previous) => previous + value + "(");
      return;
    }

    setExpression((previous) => previous + (symbols[value] || value));
  };

  const calculate = () => {
    if (!expression.trim()) return;

    try {
      let formatted = expression
        .replace(/sin\(/g, "Math.sin(Math.PI/180*(")
        .replace(/cos\(/g, "Math.cos(Math.PI/180*(")
        .replace(/tan\(/g, "Math.tan(Math.PI/180*(")
        .replace(/sqrt\(/g, "Math.sqrt(")
        .replace(/log10\(/g, "Math.log10(")
        .replace(/log\(/g, "Math.log(");

      const allowed = /^[0-9+\-*/().\sA-Za-z]*$/;

      if (!allowed.test(formatted) ||
          !/^[0-9+\-*/().\sA-Za-z]*$/.test(formatted)) {
        throw new Error("Invalid expression");
      }

      if (!/^(?:(?:Math\.(?:sin|cos|tan|sqrt|log10|log|PI|E))|[0-9+\-*/().\s])*$/i.test(formatted)) {
        throw new Error("Invalid expression");
      }

      const answer = Function('"use strict"; return (' + formatted + ')')();

      if (!Number.isFinite(answer)) {
        throw new Error("Invalid calculation");
      }

      const rounded = Number.parseFloat(answer.toPrecision(12));
      setResult(String(rounded));
      setHistory((previous) => [
        { expression, result: String(rounded) },
        ...previous
      ].slice(0, 8));
    } catch {
      setResult("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^[0-9.]$/.test(event.key)) {
        setExpression((previous) => previous + event.key);
      } else if (["+", "-", "*", "/", "(", ")"].includes(event.key)) {
        setExpression((previous) => previous + event.key);
      } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
      } else if (event.key === "Backspace") {
        setExpression((previous) => previous.slice(0, -1));
      } else if (event.key === "Escape") {
        setExpression("");
        setResult("0");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expression]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">N</div>
          <div>
            <h2>NovaCalc</h2>
            <p>SMART SCIENTIFIC CALCULATOR</p>
          </div>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light mode" : "☾ Dark mode"}
        </button>
      </header>

      <main className="main-layout">
        <section className="calculator-card">
          <div className="calculator-heading">
            <div>
              <span className="small-label">CALCULATOR</span>
              <h1>Let's calculate.</h1>
            </div>
            <span className="status">● READY</span>
          </div>

          <div className="display">
            <p className="display-label">EXPRESSION</p>
            <div className="expression">
              {expression || "0"}
            </div>
            <div className="result-area">
              <span>RESULT</span>
              <strong>{result}</strong>
            </div>
          </div>

          <div className="scientific-grid">
            {scientificButtons.flat().map((button) => (
              <button
                key={button}
                className="scientific-button"
                onClick={() => insertValue(button)}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="keypad">
            {buttons.flat().map((button) => (
              <button
                key={button}
                className={[
                  "key",
                  ["AC", "DEL", "%"].includes(button) ? "utility" : "",
                  ["+", "−", "×", "÷"].includes(button) ? "operator" : "",
                  button === "=" ? "equals" : "",
                  button === "0" ? "zero" : ""
                ].join(" ")}
                onClick={() => insertValue(button)}
              >
                {button}
              </button>
            ))}
          </div>

          <p className="keyboard-hint">
            TIP: You can also use your keyboard to calculate.
          </p>
        </section>

        <aside className="history-card">
          <div className="history-heading">
            <div>
              <span className="small-label">YOUR ACTIVITY</span>
              <h2>History</h2>
            </div>
            <button
              className="clear-history"
              onClick={() => setHistory([])}
            >
              Clear
            </button>
          </div>

          {history.length === 0 ? (
            <div className="empty-history">
              <div className="history-icon">↻</div>
              <h3>No calculations yet</h3>
              <p>Your recent calculations will appear here.</p>
            </div>
          ) : (
            <div className="history-list">
              {history.map((item, index) => (
                <button
                  className="history-item"
                  key={index}
                  onClick={() => {
                    setExpression(item.expression);
                    setResult(item.result);
                  }}
                >
                  <span>{item.expression}</span>
                  <strong>= {item.result}</strong>
                </button>
              ))}
            </div>
          )}

          <div className="history-footer">
            <span>✦</span> Calculations made simple.
          </div>
        </aside>
      </main>

      <footer>
        NOVACALC <span>•</span> BUILT WITH REACT
      </footer>
    </div>
  );
}

export default App;
```


## OUTPUT

![alt text](image.png)


## RESULT
The program for developing a simple calculator in React.js is executed successfully.