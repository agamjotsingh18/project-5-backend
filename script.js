function saveData() {
    
    var FirstName = document.getElementsByName('FirstName');
    var LastName = document.getElementsByName('LastName');
    var Email = document.getElementsByName('Email');
    var Number = document.getElementsByName('Number');
    var Message = document.getElementsByName('Message');
    
    
   alert('Data Saved!');
  }
   

function validateSearch() {

    var byFirstName   = document.getElementById('searchForm').byFirstName.value;
    
    var byLastName   = document.getElementById('searchForm').byLastName.value;
    
    var byEmail   = document.getElementById('searchForm').byEmail.value;
    
    var byNumber   = document.getElementById('searchForm').byNumber.value;
    
    var byMessage   = document.getElementById('searchForm').byMessage.value;  

    if(byFirstName == byLastName== byEmail== byNumber == byMessage == ""){
        alert("Enter at least one search parameter!");
        return false;
    }
}
function annimations {
    object.onsubmit = function(){

    setTimeout(function(){ alert("Done")} , 20);
    setInterval(function(){ alert("Done")}, 20);
    };
}