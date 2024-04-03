const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(tutorials) {
  if (!tutorials || !Array.isArray(tutorials)) {
    console.error('Invalid input: tutorials must be an array');
    return [];
  }

  const capitalizedTitles = tutorials.map(title => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  });

  console.log('Capitalized Titles:', capitalizedTitles);

  return capitalizedTitles;
}

const capitalizedTitles = titleCased(tutorials);

console.log('Expected:', [ Array(10) ]);
console.log('Actual:', capitalizedTitles);
