var role = prompt("Enter your role (admin / manager / developer / intern)");

if (role === null) {
  role = "";
}

role = role.trim().toLowerCase();

switch (role) {
  case "admin":
    alert("Full system access");
    break;

  case "manager":
    alert("Team management access");
    break;

  case "developer":
    alert("Code access");
    break;

  case "intern":
    alert("Limited access");
    break;

  default:
    alert("Invalid input. Please try again.");
}


var payment = prompt("Choose payment method (credit / debit / upi / cod)");

if (payment === null) {
  payment = "";
}

payment = payment.trim().toLowerCase();

switch (payment) {
  case "credit":
    alert("You selected Credit Card. Please enter your card details.");
    break;

  case "debit":
    alert("You selected Debit Card. Please enter your card details and PIN.");
    break;

  case "upi":
    alert("You selected UPI. Please enter your UPI ID to continue.");
    break;

  case "cod":
    alert("You selected Cash on Delivery. Please pay when the order arrives.");
    break;

  default:
    alert("Invalid input. Please try again.");
}


var status = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");

if (status === null) {
  status = "";
}

status = status.trim().toLowerCase();

switch (status) {
  case "placed":
    alert("Your order has been placed successfully.");
    break;

  case "packed":
    alert("Your order is packed and ready to be shipped.");
    break;

  case "shipped":
    alert("Your order has been shipped and is on the way.");
    break;

  case "delivered":
    alert("Your order has been delivered. Enjoy!");
    break;

  case "cancelled":
    alert("Your order has been cancelled.");
    break;

  default:
    alert("Invalid input. Please try again.");
}


var day = prompt("Enter day name (Monday - Sunday)");

if (day === null) {
  day = "";
}

day = day.trim().toLowerCase();

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Working day");
    break;

  case "saturday":
    alert("Half day");
    break;

  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid input. Please try again.");
}