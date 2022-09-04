// GET DATA FROM TABLE TO DETERMINE IF TO SHOW TABLE OR NOT
function showOrHideTable(){
  //gets table
let ourTable = document.getElementById('myTable');
//gets rows of table
let rowLength = ourTable.rows.length;
// condition to display table or not based off rows length
  if (rowLength <= 1) {
  document.getElementById('defaultContainer').style.display = "block"
}
else {
 document.getElementById('tableContainer').style.display = "block"
}
}

// call the show or hide function
showOrHideTable()

// INSERT FORM DATA INTO TABLE AS ROWS
function insertData(){
  // get form data value using id
  let campaignName = document.getElementById("campaignName").value
  let campaignStartDate = document.getElementById("campaignStartDate").value
  let campaignType = document.getElementById("campaignType").value
  
  // get campaignStopDate and today's date
  let campaignStopDate = document.getElementById("campaignStopDate").value
  campaignStopDate = new Date(campaignStopDate)
  let today = new Date()
  let campaignStatus = null
  let campaignColor = null
 
  // if campaignStopDate is before today -> completed
  // if campaignStopDate is today or beyond -> ongoing
 
  if(today > campaignStopDate){
     // campaignStopDate is before today -> completed
    campaignStatus = "Completed"
    campaignColor = "green"
  }else{
    // campaignStopDate is today or beyond -> ongoing
     campaignStatus = "Ongoing"
     campaignColor = "yellow"
  }
  

  // customize the table row content
  let myHtmlContent = `<td><a href="#"><input class="radio" type="radio">${campaignName} - ${campaignStartDate}</a></td><td>${campaignType}</td><td class="${campaignColor}">${campaignStatus}</td>`

  // inserts the row content into the table
  let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0]
  let newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = myHtmlContent;
  
  // show the table and hide the default page/form 
  document.getElementById('tableContainer').style.display = "block"
  document.getElementById('defaultContainer').style.display = "none"
  document.getElementById('formContainer').style.display = "none"
  
  // clear previous input
  document.getElementById("campaignName").value = null
  document.getElementById("campaignStartDate").value = null
  document.getElementById("campaignType").value = null
  
}

function showForm(){
  // shows the form div and hides everything else
  document.getElementById('defaultContainer').style.display = "none"
  document.getElementById('tableContainer').style.display = "none"
  document.getElementById('formContainer').style.display = "block"
}

function hideForm(){
  // decide if to show table or not
  showOrHideTable()
  // hides the form
  document.getElementById('formContainer').style.display = "none"
}




// let failed = document.getElementsByClassName('red');
// failed[0].style.color = "red";
// failed[1].style.color = "red";

// let ongoing = document.getElementsByClassName('yellow');
// ongoing[0].style.color = "yellow";
// ongoing[1].style.color = "yellow";

// let success = document.getElementsByClassName('green');
// success[0].style.color = "green";
// success[1].style.color = "green";
