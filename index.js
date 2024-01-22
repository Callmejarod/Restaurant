document.addEventListener('DOMContentLoaded', function () {
    // Get the "Order Now" button
    var orderNowButton = document.querySelector('.home-card button');
  
    // Add a click event listener to the button
    orderNowButton.addEventListener('click', function () {
      // Display an alert when the button is clicked
      alert('Order Now button clicked! Place your order.');
    });
  });
  