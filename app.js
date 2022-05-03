const getBalance = async () => {
  const url = "https://budgetapp-itk.herokuapp.com/v1/balance";
  const data = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const res = await data.json();
  document.getElementById("balanceText").innerHTML = res.currentBalance;
};

const postNewBalance = async () => {
  const url = "https://budgetapp-itk.herokuapp.com/v1/transaction";

  const motive = document.getElementById("expense-title-input").value;
  const incomingAmount = +document.getElementById("expense-amount-input").value;

  if (incomingAmount !== 0 && motive !== "") {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ incomingAmount, motive }),
    });
  }
};

const clearBalanceAPI = async () => {
  const url = "https://budgetapp-itk.herokuapp.com/v1/clear";
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
};

clearBalanceAPI();
