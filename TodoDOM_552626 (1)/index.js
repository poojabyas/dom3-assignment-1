
  document.addEventListener('DOMContentLoaded', function () {
    // Get the form and table elements
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevents the form from submitting in the traditional way

      // Get form values
      const taskName = document.getElementById('task').value;
      const priority = document.getElementById('priority').value;

      // Validate form input
      if (!taskName || !priority) {
        alert('Please fill out both task name and priority');
        return;
      }

      // Create new table row
      const newRow = document.createElement('tr');

      // Set task name and priority
      newRow.innerHTML = `<td>${taskName}</td><td>${priority}</td><td><button class="favorite">Favourite</button></td>`;

      // Set background color based on priority
      if (priority.toLowerCase() === 'high') {
        newRow.classList.add('high-priority');
      } else if (priority.toLowerCase() === 'low') {
        newRow.classList.add('low-priority');
      }

      // Add Favourite column (you can add your logic here for the Favourite column)

      // Append row to table
      tableBody.appendChild(newRow);

      // Reset form
      form.reset();
    });

    // Event listener for Favourite button click (you can add your logic here)
    tableBody.addEventListener('click', function (event) {
      if (event.target.classList.contains('favorite')) {
        // Handle Favourite button click
        console.log('Favourite button clicked');
      }
    });
  });

