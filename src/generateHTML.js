// going to create all employee types in cards

// to make the manager
const generateManager = function (manager) {
};

// to make the engineer
const generateEngineer = function (engineer) {
};

// to make the intern
const generateIntern = function (intern) {
};
  
// to send the array to the page
generateHTML = (data) => {
    
};  

const generateGroupPage = function (employeeCards) {  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group Profile</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <header class="header">
      <h1>Employee Group Profile</h1>
    </header>
    <div class="container">
      <div class="row justify-content-center" id="group-cards">
        <!--Group Cards-->
        ${employeeCards}
      </div>
    </div>
  </body>
  </html>

`;
}

// export to index.js for running
module.exports = generateHTML;