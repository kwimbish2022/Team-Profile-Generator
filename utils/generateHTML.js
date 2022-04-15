// create cards for all employee types
// for the intern card
const createIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-150">
      <div class="card-header">
        <h2>${intern.employeeName}</h2>
        <h3>Intern</h3><i class="material-icons">school</i>
      </div>
        
      <div class="card-body">
        <p class="id">ID: ${intern.employeeId}</p>
        <p class="email">Email:<a href="mailto:${intern.emailAddress}">${intern.emailAddress}</a></p>
        <p class="school">School: ${intern.school}</p>
      </div>
      
    </div>
  </div>
  `
};

// for the engineer card
const createEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-150">
          <div class="card-header">
              <h2>${engineer.employeeName}</h2>
              <h3>Engineer</h3><i class="material-icons">free_breakfast</i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${engineer.employeeId}</p>
              <p class="email">Email: <a href="mailto:${engineer.emailAddress}">${engineer.emailAddress}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>

      </div>
  </div>
  `
}

// for the manager card
const createManager = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-150">
          <div class="card-header">
              <h2>${manager.employeeName}</h2>
              <h3>Manager</h3><i class="material-icons">business_center</i>
          </div>
  
          <div class="card-body">
              <p class="id">ID: ${manager.employeeId}</p>
              <p class="email">Email: <a href="mailto:${manager.emailAddress}">${manager.emailAddress}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</a></p>
          </div>
  
      </div>
  </div>
  `
}

// lets put this all in an array to get to the page
generateHTML = (data) => {
  // new array, for the cards
  groupArray = [];

  for (let i = 0; i <data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // to get the manager function
    if (role === 'Manager') {
      const managerCard = createManager(employee);
      groupArray.push(managerCard);
    }

    // to get the engineer function
    if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);
      groupArray.push(engineerCard);
    }

    // to get the intern function
    if (role === 'Intern') {
      const internCard = createIntern(employee);
      groupArray.push(internCard);
    }
  }

  // gotta join them all together :)
  const employeeCards = groupArray.join('')

  // to get the created page
  const createGroup = createGroupPage(employeeCards);
  return createGroup;
}

// to put it all together into the HTML group page
const createGroupPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group Profile</title>
    <!-- in case I forget, got bootstrap info from https://getbootstrap.com/docs/5.1/getting-started/introduction/ -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- in case I forget, got materialize info from https://materializecss.com/icons.html -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    
    <header>
      <div class="header" id="header">
        <span class="header mb-3 h1 w-100 text-center" id="header-text">Group Profile</span>
      </div>
    </header>
    
    <div>
      <div class="container">
        <div class="row justify-content-center" id="group-cards">
          <!-- this is where the cards will render from the user input from node -->
          ${employeeCards}
        </div>
      </div>  
    
      </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>    
  </html>
`;
}

// export to index.js for running
module.exports = generateHTML; 
