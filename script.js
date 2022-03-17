const firstName = document.querySelector('.firstNameSpan');
const lastName = document.querySelector('.lastNameSpan');
const registerDate = document.querySelector('.registerDateSpan');
const nationality = document.querySelector('.nationalitySpan');
const locationAddress = document.querySelector('.locationAddressSpan');
const photo = document.querySelector('.img');
const hideAddressCheckbox = document.querySelector('.checkbox');
const userContainer = document.querySelector('.userContainer');
const inputContainer = document.querySelector('.inputContainer');

const firstName1 = document.querySelector('.firstName1');
const firstName2 = document.querySelector('.firstName2');
const firstName3 = document.querySelector('.firstName3');
const firstName4 = document.querySelector('.firstName4');
const firstName5 = document.querySelector('.firstName5');
const firstName6 = document.querySelector('.firstName6');
const firstName7 = document.querySelector('.firstName7');
const firstName8 = document.querySelector('.firstName8');
const firstName9 = document.querySelector('.firstName9');
const firstName10 = document.querySelector('.firstName10');

const lastName1 = document.querySelector('.lastName1');
const lastName2 = document.querySelector('.lastName2');
const lastName3 = document.querySelector('.lastName3');
const lastName4 = document.querySelector('.lastName4');
const lastName5 = document.querySelector('.lastName5');
const lastName6 = document.querySelector('.lastName6');
const lastName7 = document.querySelector('.lastName7');
const lastName8 = document.querySelector('.lastName8');
const lastName9 = document.querySelector('.lastName9');
const lastName10 = document.querySelector('.lastName10');

const registerDate1 = document.querySelector('.registerDate1');
const registerDate2 = document.querySelector('.registerDate2');
const registerDate3 = document.querySelector('.registerDate3');
const registerDate4 = document.querySelector('.registerDate4');
const registerDate5 = document.querySelector('.registerDate5');
const registerDate6 = document.querySelector('.registerDate6');
const registerDate7 = document.querySelector('.registerDate7');
const registerDate8 = document.querySelector('.registerDate8');
const registerDate9 = document.querySelector('.registerDate9');
const registerDate10 = document.querySelector('.registerDate10');

const country1 = document.querySelector('.country1');
const country2 = document.querySelector('.country2');
const country3 = document.querySelector('.country3');
const country4 = document.querySelector('.country4');
const country5 = document.querySelector('.country5');
const country6 = document.querySelector('.country6');
const country7 = document.querySelector('.country7');
const country8 = document.querySelector('.country8');
const country9 = document.querySelector('.country9');
const country10 = document.querySelector('.country10');

const showLatestBtn = document.querySelector('.showLatestBtn');
const goBackBtn = document.querySelector('.goBackBtn');
const sortByLastNameBtn = document.querySelector('.sortByLastNameBtn');
const sortByRegistrationDateBtn = document.querySelector('.sortByRegistrationDateBtn');
const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');

let latestUsers = [];

let usersCounter = 0;

const apiUrl = 'https://randomuser.me/api';
async function getRandomUser () {
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomUser = data.results[0];
    showUser(randomUser);
    userContainer.hidden = false;
    inputContainer.hidden = false;
}


function showUser(randomUser) {
    const firstNameHolder = randomUser.name.first;
    firstName.innerText = firstNameHolder;
    const lastNameHolder = randomUser.name.last;
    lastName.innerText = lastNameHolder;
    const date = randomUser.registered.date.slice(0, 10);
    registerDate.innerText = date;
    nationality.innerText = randomUser.nat;
    const country = randomUser.location.country;
    locationAddress.innerText =`${country},  ${randomUser.location.city}, ${randomUser.location.street.name}/${randomUser.location.street.number}`;
    const userPhoto = randomUser.picture.large;
    photo.setAttribute('src', userPhoto);

    const currentUser = {
        firstName: firstNameHolder,
        lastName: lastNameHolder,
        registerDate: date,
        country: country
    }

    if(usersCounter<10) {
           latestUsers.unshift(currentUser);
           usersCounter++;
    } else {
        for(let j=0; j<10; j++){
                  latestUsers[-j+10] = latestUsers[-j+9];
                }
                latestUsers.pop();
                latestUsers[0]= currentUser;
                usersCounter++;
    }
    assignDataToLatestUsers ();
    
}

function showSecondPage() {
        firstPage.hidden = true;
        secondPage.hidden = false;
}

function showFirstPage() {
    secondPage.hidden = true;
    firstPage.hidden = false;
}

function sortByLastName (a, b) {
    const tmpA = a.lastName;
    const tmpB = b.lastName;
    
    if(tmpA > tmpB) {
      return 1
    } else if (tmpA < tmpB) {
      return -1
    } else {
      return 0
    }
}

function sortByLastName2 () {
    latestUsers.sort(sortByLastName);
    assignDataToLatestUsers ();
}

function sortByRegistrationDate (a, b) {
    const tmpA = a.registerDate;
    const tmpB = b.registerDate;
    
    if(tmpA > tmpB) {
      return 1
    } else if (tmpA < tmpB) {
      return -1
    } else {
      return 0
    }
  }

function sortByRegistrationDate2 () {
    latestUsers.sort(sortByRegistrationDate);
    // updateLatestUsers();
    assignDataToLatestUsers ();
}


const button = document.querySelector('.newUserBtn');
button.addEventListener('click', getRandomUser);

showLatestBtn.addEventListener('click', showSecondPage);

goBackBtn.addEventListener('click', showFirstPage);

sortByLastNameBtn.addEventListener('click', sortByLastName2);

sortByRegistrationDateBtn.addEventListener('click', sortByRegistrationDate2);

function toggleAddress (){
    if (hideAddressCheckbox.checked == true){
        locationAddress.hidden = true;
      } else {
        locationAddress.hidden = false;
    }
}
function assignDataToLatestUsers () {
    if(usersCounter == 1){
        firstName1.textContent = latestUsers[0].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        country1.textContent = latestUsers[0].country;
    } else if(usersCounter == 2) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
    } else if(usersCounter == 3) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
    } else if(usersCounter == 4) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
    } else if(usersCounter == 5) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
    } else if(usersCounter == 6) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        firstName6.textContent = latestUsers[5].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        lastName6.textContent = latestUsers[5].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        registerDate6.textContent = latestUsers[5].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
        country6.textContent = latestUsers[5].country;

    } else if(usersCounter == 7) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        firstName6.textContent = latestUsers[5].firstName;
        firstName7.textContent = latestUsers[6].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        lastName6.textContent = latestUsers[5].lastName;
        lastName7.textContent = latestUsers[6].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        registerDate6.textContent = latestUsers[5].registerDate;
        registerDate7.textContent = latestUsers[6].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
        country6.textContent = latestUsers[5].country;
        country7.textContent = latestUsers[6].country;
    } else if(usersCounter == 8) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        firstName6.textContent = latestUsers[5].firstName;
        firstName7.textContent = latestUsers[6].firstName;
        firstName8.textContent = latestUsers[7].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        lastName6.textContent = latestUsers[5].lastName;
        lastName7.textContent = latestUsers[6].lastName;
        lastName8.textContent = latestUsers[7].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        registerDate6.textContent = latestUsers[5].registerDate;
        registerDate7.textContent = latestUsers[6].registerDate;
        registerDate8.textContent = latestUsers[7].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
        country6.textContent = latestUsers[5].country;
        country7.textContent = latestUsers[6].country;
        country8.textContent = latestUsers[7].country;
    } else if(usersCounter == 9) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        firstName6.textContent = latestUsers[5].firstName;
        firstName7.textContent = latestUsers[6].firstName;
        firstName8.textContent = latestUsers[7].firstName;
        firstName9.textContent = latestUsers[8].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        lastName6.textContent = latestUsers[5].lastName;
        lastName7.textContent = latestUsers[6].lastName;
        lastName8.textContent = latestUsers[7].lastName;
        lastName9.textContent = latestUsers[8].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        registerDate6.textContent = latestUsers[5].registerDate;
        registerDate7.textContent = latestUsers[6].registerDate;
        registerDate8.textContent = latestUsers[7].registerDate;
        registerDate9.textContent = latestUsers[8].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
        country6.textContent = latestUsers[5].country;
        country7.textContent = latestUsers[6].country;
        country8.textContent = latestUsers[7].country;
        country9.textContent = latestUsers[8].country;
    } else if(usersCounter>9) {
        firstName1.textContent = latestUsers[0].firstName;
        firstName2.textContent = latestUsers[1].firstName;
        firstName3.textContent = latestUsers[2].firstName;
        firstName4.textContent = latestUsers[3].firstName;
        firstName5.textContent = latestUsers[4].firstName;
        firstName6.textContent = latestUsers[5].firstName;
        firstName7.textContent = latestUsers[6].firstName;
        firstName8.textContent = latestUsers[7].firstName;
        firstName9.textContent = latestUsers[8].firstName;
        firstName10.textContent = latestUsers[9].firstName;
        lastName1.textContent = latestUsers[0].lastName;
        lastName2.textContent = latestUsers[1].lastName;
        lastName3.textContent = latestUsers[2].lastName;
        lastName4.textContent = latestUsers[3].lastName;
        lastName5.textContent = latestUsers[4].lastName;
        lastName6.textContent = latestUsers[5].lastName;
        lastName7.textContent = latestUsers[6].lastName;
        lastName8.textContent = latestUsers[7].lastName;
        lastName9.textContent = latestUsers[8].lastName;
        lastName10.textContent = latestUsers[9].lastName;
        registerDate1.textContent = latestUsers[0].registerDate;
        registerDate2.textContent = latestUsers[1].registerDate;
        registerDate3.textContent = latestUsers[2].registerDate;
        registerDate4.textContent = latestUsers[3].registerDate;
        registerDate5.textContent = latestUsers[4].registerDate;
        registerDate6.textContent = latestUsers[5].registerDate;
        registerDate7.textContent = latestUsers[6].registerDate;
        registerDate8.textContent = latestUsers[7].registerDate;
        registerDate9.textContent = latestUsers[8].registerDate;
        registerDate10.textContent = latestUsers[9].registerDate;
        country1.textContent = latestUsers[0].country;
        country2.textContent = latestUsers[1].country;
        country3.textContent = latestUsers[2].country;
        country4.textContent = latestUsers[3].country;
        country5.textContent = latestUsers[4].country;
        country6.textContent = latestUsers[5].country;
        country7.textContent = latestUsers[6].country;
        country8.textContent = latestUsers[7].country;
        country9.textContent = latestUsers[8].country;
        country10.textContent = latestUsers[9].country;
    }
}


