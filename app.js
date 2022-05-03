
  const elementAmount = document.getElementById("expense-amount-input");
  const postNewBalanace = async () => {

  const url = "https://budgetapp-itk.herokuapp.com/v1/transaction";



  const motive = document.getElementById("expense-title-input").value;

  const amount = +elementAmount.value;



  console.log(amount, motive);



  if (amount !== "" && motive !== "") {

    await fetch(url, {

      method: "POST",

      headers: { "Content-Type": "aplication/json" },

      body: JSON.stringify({ incomingAmount: amount, motive: motive }),

    });

  }

 

};
