// Weekly Challenge status

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) { // request finished and response is now ready
    var weeklyChallengeData = JSON.parse(xhr.responseText); // data is ready to be displayed. We'll see in console log
    var statusHTML = '';
    var numWeeks = weeklyChallengeData[0].weeklyPercentageChange.length; 
    var numUsers = weeklyChallengeData.length;
    statusHTML += '<tr>';
    // Header of Table
    for(var i = 0; i < (numWeeks+1); i++) {
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
      statusHTML += '<td>' + weeklyChallengeData[i].user + '</td>';
      for(var j = 0; j < numWeeks; j++) {
            pc = weeklyChallengeData[i].weeklyPercentageChange[j]; //percentage change value stored in pc
            
            if(pc < 0) {
              statusHTML += '<td class="status gained">' + pc + '</td>';
            } else if(pc == 0) {
              statusHTML += '<td class="status neutral">' + pc + '</td>';
            } else{
              statusHTML += '<td class="status">' + pc + '</td>';
            }
      }
      statusHTML += '</tr>';
    }
    document.querySelector('.flightStatus tbody').innerHTML = statusHTML;
 }
} 
xhr.open('GET', 'data/flight.json'); // using GET method, we get data from flight.json
xhr.send();