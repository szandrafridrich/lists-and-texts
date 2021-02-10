let names = ['Adam', 'Gabor', 'Peter', 'Nora', 'Lisa', 'Szandi'];
names.forEach(element => console.log(element));

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  $('head').append('<head>Added with javascript</head>');
  $('p').append('<p>This block was added using JavaScripts jQuery library</p>');
