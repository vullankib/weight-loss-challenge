// Weekly Challenge status
var weeklyChallengeData;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) { // request finished and response is now ready
    weeklyChallengeData = JSON.parse(xhr.responseText); // data is ready to be displayed. We'll see in console log
    console.log(weeklyChallengeData);
    fillTable(weeklyChallengeData);
 }
} 
xhr.open('GET', 'data/weight.json'); // using GET method, we get data from weight.json
xhr.send();

function fillTable(obj){
  var statusHTML = '';
    var numWeeks = obj[0].weeklyPercentageChange.length; 
    var numUsers = obj.length;
    statusHTML += '<tr>';
    // Header of Table
    for(var i = 0; i < numWeeks; i++) {
      if (i==0){
        statusHTML += '<th>'  + '</th>';
      } 
      else {
        statusHTML += '<th>' + "Week " + i + '</th>';
      }    
    }
    statusHTML += ' <th>'+"Total"+'</th>'+'</tr>';
    for(var i = 0; i < numUsers; i++) {
      statusHTML += '<tr>';
      statusHTML += '<td class="light">' + obj[i].user + '</td>';
      for(var j = 0; j < numWeeks-1; j++) {
            pc = obj[i].weeklyPercentageChange[j]; //percentage change value stored in pc
            
            if(pc < 0) {
              statusHTML += '<td class="status gained">' + pc + '</td>';
            } else if(pc == 0) {
              statusHTML += '<td class="status neutral">' + pc + '</td>';
            } else{
              statusHTML += '<td class="status">' + pc + '</td>';
            }
      }
            pc = obj[i].weeklyPercentageChange[j]; //percentage change value stored in pc
            
            if(pc < 0) {
              statusHTML += '<td class="status gained">' + pc + '</td>';
            } else if(pc == 0) {
              statusHTML += '<td class="status neutral">' + pc + '</td>';
            } else{
              statusHTML += '<td class="status">' + pc + '</td>';
            }
      statusHTML += '</tr>';
    }
    document.querySelector('.weightStatus tbody').innerHTML = statusHTML;
}

document.getElementById('dTable').addEventListener('click', ()=>myFunction(event), false);

function myFunction()
{
  var col = window.event.target.cellIndex;
  var row = window.event.target.parentNode.rowIndex;
  console.log(weeklyChallengeData);
  // alert('Col index is: ' + col + '\nRow index is: ' + row);
  weeklyChallengeData.sort( GetSortOrder(obj => obj.weeklyPercentageChange[col-1]) );
  for (var item in weeklyChallengeData) {
    console.log(weeklyChallengeData[item].weeklyPercentageChange[col-1]+weeklyChallengeData[item].user);
   }
   fillTable(weeklyChallengeData);

}
function GetSortOrder(getProp){
  return function(a,b){
    return getProp(a) - getProp(b);
  }
}

