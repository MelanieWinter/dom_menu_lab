// inserting link element into head for stylesheet
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'styles.css'; 
document.head.appendChild(linkElement);

// Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main');

// Set the background color of mainEl using the --main-bg CSS custom property
// Hint: Assign a string that uses the CSS var() function like this:
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');
