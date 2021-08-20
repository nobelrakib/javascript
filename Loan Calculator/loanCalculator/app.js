//Listen for the submit button
document.getElementById("loan-form").addEventListener("submit", (e) => {
  //Hide the results
  document.getElementById("results").style.display = "none";

  //Show loader
  document.getElementById("loading").style.display = "block";

  //Show the calculated results after 2000ms or 2seconds
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

calculateResults = () => {
  console.log("calculating...");

  //UI vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthlyPayment");
  const totalPayment = document.getElementById("totalPayment");
  const totalInterest = document.getElementById("totalInterest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute the monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    //Show the results
    document.getElementById("results").style.display = "block";

    //Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers...");
  }
};

showError = (error) => {
  //Hide results
  document.getElementById("results").style.display = "none";

  //Hide loader
  document.getElementById("loading").style.display = "none";

  // create a div with classnames to custom show the error message
  const errorDiv = document.createElement("div");

  //Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add class to error div
  errorDiv.className = "alert alert-danger";

  //create a text node and append to the errordiv
  errorDiv.appendChild(document.createTextNode(error));

  //Insert errordiv inside card but before the heading
  card.insertBefore(errorDiv, heading);

  //clear the error after 3 seconds
  setTimeout(clearError, 3000);
};

clearError = () => {
  document.querySelector(".alert").remove();
};
