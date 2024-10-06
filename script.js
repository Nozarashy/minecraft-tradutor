const symbolMap = {
  "A": "ᔑ", "B": "ʖ", "C": "ᓵ", "D": "↸", "E": "ᒷ", "F": "⎓", "G": "⊣", 
  "H": "⍑", "I": "╎", "J": "⋮", "K": "ꖌ", "L": "ꖎ", "M": "ᒲ", "N": "リ", 
  "O": "𝙹", "P": "!¡", "Q": "ᑑ", "R": "∷", "S": "ᓭ", "T": "ℸ ̣", "U": "⚍", 
  "V": "⍊", "W": "∴", "X": " ̇/", "Y": "||", "Z": "⨅"
};

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

inputText.addEventListener('input', () => {
  let input = inputText.value.toUpperCase().replace(/[^A-Z]/g, '');
  let convertedText = '';

  for (let char of input) {
      convertedText += symbolMap[char] || char;
  }

  outputText.value = convertedText;
});
