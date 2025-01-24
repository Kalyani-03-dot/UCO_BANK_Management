
let accounts = {
    1001: { name: "John Doe", balance: 5000 },
    1002: { name: "Jane Smith", balance: 3000 },
  };
  
  // Update transaction log
  function updateTransactionLog(message) {
    const logSection = document.querySelector(".search-bar");
    const logEntry = document.createElement("p");
    logEntry.textContent = message;
    logSection.appendChild(logEntry);
  }
  
  // Display account balance
  function displayBalance(accountNumber) {
    const account = accounts[accountNumber];
    if (account) {
      updateTransactionLog(
        `Account Number: ${accountNumber}, Balance: ₹${account.balance}`
      );
    } else {
      alert("Account not found!");
    }
  }
  
  // Deposit money
  function deposit(accountNumber, amount) {
    const account = accounts[accountNumber];
    if (account && amount > 0) {
      account.balance += amount;
      updateTransactionLog(
        `Deposited ₹${amount} into Account Number: ${accountNumber}. New Balance: ₹${account.balance}`
      );
    } else {
      alert("Invalid account or amount!");
    }
  }
  
  // Withdraw money
  function withdraw(accountNumber, amount) {
    const account = accounts[accountNumber];
    if (account) {
      if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        updateTransactionLog(
          `Withdrew ₹${amount} from Account Number: ${accountNumber}. Remaining Balance: ₹${account.balance}`
        );
      } else {
        alert("Invalid amount or insufficient balance!");
      }
    } else {
      alert("Account not found!");
    }
  }
  
  // Transfer money
  function transfer(fromAccount, toAccount, amount) {
    const sender = accounts[fromAccount];
    const receiver = accounts[toAccount];
    if (sender && receiver) {
      if (amount > 0 && amount <= sender.balance) {
        sender.balance -= amount;
        receiver.balance += amount;
        updateTransactionLog(
          `Transferred ₹${amount} from Account Number: ${fromAccount} to Account Number: ${toAccount}.`
        );
      } else {
        alert("Invalid amount or insufficient balance!");
      }
    } else {
      alert("One or both accounts not found!");
    }
  }
  