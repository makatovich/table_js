const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
const addUserBtn = document.querySelector('.add_user_btn');
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');


function deleteUser() {
    let deleteTr = this.closest('tr');
    deleteTr.remove();
}
function addTdWithBtns(tr) {
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');

    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';

    deleteUserBtn.addEventListener ( 'click', deleteUser );
    editUserBtn.addEventListener ('click' , changeUserName );

    deleteUserBtn.innerHTML = '<i class="fa fa-user-secret" aria-hidden="true"></i>';
    editUserBtn.innerHTML = '<i class="fa fa-pencil-square" aria-hidden="true"></i>';

    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
}

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }

    addTdWithBtns(tr);
    
    tbody.append(tr);
}

formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
    
    let tr = document.createElement('tr');
    tr.innerHTML = `            
    <td>${inputNameValue}</td>
    <td>${inputSecondNameValue}</td>
    <td>${inputAgeValue}</td>`;
    addTdWithBtns(tr);
    tbody.append(tr);
    
});

function changeUserName () {
 
     changeUerFirstName = prompt ('Input New Name');
     changeUerLastName = prompt ('Input New Last Name');
     changeUerAge = prompt ('Input New Age');
 
     let tr = this.closest('tr');
     tr.innerHTML = `
     <td>${changeUserFirstName}</td>
     <td>${changeUserLastName}</td>
     <td>${+changeUserAge}</td>`;

     addTdWithBtns(tr);
     
}
