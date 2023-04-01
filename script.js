// Random Quotes
const quotes = [
    "HTML is a markup language",
    "CSS is stylesheet language",
    "JavaScript is a programming language",
    "TailwindCSS and Bootstrap are CSS frameworks",
    "ReactJS is JavaScript library",
    "AngularJS and VueJS are JavaScript frameworks",
    "NodeJS is open sourse JS run time cross platform",
    "MongoDB is a NoSQL",
    "Python is a backbone of Data science",
    "Frontend development has good future"
  ];
  
  const generateBtn = document.querySelector("#generate-btn");
  const quoteElem = document.querySelector("#quote");
  
  generateBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElem.textContent = quotes[randomIndex];
  });

// Clipboard
 let copyToClipboard = () => {
    // Get the text from the input field
    const text = document.querySelector("#quote").innerHTML;
    // Create a temporary input element to copy the text to the clipboard
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    // Select the text in the input element
    tempInput.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    };
  