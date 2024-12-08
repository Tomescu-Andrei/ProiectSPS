function placeBid(event) {
    // Get the button clicked
    const button = event.target;
  
    // Find the parent card of the button
    const artCard = button.closest('.art-card');
  
    // Get the current bid element and its value
    const currentBidElement = artCard.querySelector('p:nth-of-type(3)');
    const currentBidText = currentBidElement.textContent;
    const currentBid = parseFloat(currentBidText.replace(/[^0-9.]/g, ''));
  
    // Ask the user for a new bid
    const newBid = parseFloat(prompt(`Current bid is $${currentBid}. Enter your bid:`));
  
    // Validate the new bid
    if (isNaN(newBid) || newBid <= currentBid) {
      alert("Please enter a valid bid higher than the current bid.");
      return;
    }
  
    // Update the current bid text
    currentBidElement.textContent = `Current Bid: $${newBid}`;
    alert("Successfully Bid!");
  }
  
  // Attach event listeners to all "Place Bid" buttons
  const buttons = document.querySelectorAll(".art-card button");
  buttons.forEach((button) => {
    button.addEventListener("click", placeBid);
  });
  