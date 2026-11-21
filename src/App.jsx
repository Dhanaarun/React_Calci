
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
