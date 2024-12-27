// 1. <h1> ჰედერი ლურჯი ფერის რომ გახდეს: 
const h1Element = document.querySelector('.container h1');
h1Element.style.color = 'blue';

// 2. <h2> ჰედერის გარეკანი ლურჯი ფერის და ტექსტი თეთრი ფერის რომ გახდეს: 
const h2Element = document.querySelector('.container h2');
h2Element.style.backgroundColor = 'blue';
h2Element.style.color = 'white';

// 3. <span> ტეგში მოცემული ტექსტის ფონტის ზომა უნდა გახდეს 200% :
const spanElement = document.querySelector('.container span');
spanElement.style.fontSize = '200%';