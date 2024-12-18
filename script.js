// Select elements
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const newQuoteButton = document.querySelector('#new-quote');
const audio = document.getElementById('background-audio');
const muteButton = document.getElementById('mute-btn');


// NEXT QUOTE BUTTON --------------------------------------------------------------------------------------
// Fetch quotes from an external JSON file
let quotes = [];
fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
    displayRandomQuote(); // Display a quote when the page loads
  })
  .catch(error => console.error('Error loading quotes:', error));

// Function to display a random quote
function displayRandomQuote() {
  if (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteText.textContent = `"${selectedQuote.quote}"`;
    authorText.textContent = `- ${selectedQuote.author} -`;
  }
}
// Event listener for the button
newQuoteButton.addEventListener('click', displayRandomQuote);




// SOUND EFFECT (mute/unmute) ----------------------------------------------------------------------------
audio.loop = true; // Enable looping
// Start playback
audio.play().catch(error => {
  console.error("Playback failed:", error);
});

muteButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>'; 
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>';
  }
});



// DELETE
document.getElementById("newQuoteButton").addEventListener("click", () => {
  audioElement.play();
});




// RAIN EFFECT -------------------------------------------------------------------------------------------
const createRain = () => {
  const rainDrop = document.createElement('div');
  rainDrop.className = 'rain';
  rainDrop.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
  rainDrop.style.animationDuration = `${Math.random() * 0.5 + 1}s`; // Randomize fall speed
  document.body.appendChild(rainDrop);

  // Remove the drop after its animation ends
  setTimeout(() => rainDrop.remove(), 5000);
};

// Create rain at intervals
setInterval(createRain, 50);

