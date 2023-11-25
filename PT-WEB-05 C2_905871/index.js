


document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function submitForm() {
      // Get values from the form
      var name = document.getElementById('name').value;
      var doctorId = document.getElementById('docID').value;
      var specialization = document.getElementById('dept').value;
      var experience = document.getElementById('exp').value;
      var email = document.getElementById('email').value;
      var mobile = document.getElementById('mbl').value;
  
      // Determine role based on experience
      var role = '';
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Trainee';
      }
  
      // Create a new table row
      var table = document.querySelector('table tbody');
      var newRow = table.insertRow(table.rows.length);
      var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7)
      ];
  
      // Populate the cells with data
      cells[0].innerHTML = name;
      cells[1].innerHTML = doctorId;
      cells[2].innerHTML = specialization;
      cells[3].innerHTML = experience;
      cells[4].innerHTML = email;
      cells[5].innerHTML = mobile;
      cells[6].innerHTML = role;
      cells[7].innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    }
  
    // Function to delete a table row
    window.deleteRow = function (btn) {
      var row = btn.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  
    // Attach the submitForm function to the form's submit event
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();
      submitForm();
    });
  });
  