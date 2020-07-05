let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];
let list6 = [];

let n = 1;
let x = 0;

function AddRow() {
  if (fname.value.length == '') {
    swal('', 'Please enter First Name', 'error');
  } else if (lname.value.length == '') {
    swal('', 'Please enter Last Name', 'error');
  } else if ((email.value.length = '')) {
    swal('', 'Email is required', 'error');
  } else if (city.value.length == '') {
    swal('', 'City is required', 'error');
  } else if (phone.value.length < 10 || phone.value.length > 10) {
    swal('', 'Phone Number is Invalid', 'error');
  } else {
    swal('', 'Successfully Inserted', 'success');
    let AddRown = document.getElementById('show');
    let NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById('fname').value;
    list2[x] = document.getElementById('lname').value;
    list3[x] = document.getElementById('email').value;
    list4[x] = document.getElementById('city').value;
    list5[x] = document.getElementById('phone').value;
    list6[x] = document.getElementById('ZIP').value;

    let cel1 = NewRow.insertCell(0);
    let cel2 = NewRow.insertCell(1);
    let cel3 = NewRow.insertCell(2);
    let cel4 = NewRow.insertCell(3);
    let cel5 = NewRow.insertCell(4);
    let cel6 = NewRow.insertCell(5);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];

    n++;
    x++;
  }
}
