import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const pressButton = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const pressOperator = (operation) => {
    setOperand(parseFloat(display));
    setOperator(operation);
    setDisplay('0');
  };

  const calculate = () => {
    const num = parseFloat(display);
    let result;
    switch (operator) {
      case '+':
        result = operand + num;
        break;
      case '-':
        result = operand - num;
        break;
      case '*':
        result = operand * num;
        break;
      case '/':
        result = operand / num;
        break;
      default:
        result = display;
    }
    setDisplay(result.toString());
    setOperand(null);
    setOperator(null);
  };

  const buttonValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '='];

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        <span style={styles.displayText}>{display}</span>
      </div>
      <div style={styles.buttons}>
        {buttonValues.map((val) => (
          <button
            key={val}
            onClick={() => {
              if (val === '=') {
                calculate();
              } else if (['+', '-', '*', '/'].includes(val)) {
                pressOperator(val);
              } else {
                pressButton(val);
              }
            }}
            style={styles.button}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  display: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
  },
  displayText: {
    wordWrap: 'break-word',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Calculator;