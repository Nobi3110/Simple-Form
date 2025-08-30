let studentCount = 0;

function addStudent() {
  // Get form values
  const name = document.getElementById("name").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validation
  if (!name || !studentId || !phone || !email) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  studentCount++;
  const tableBody = document.getElementById("studentTableBody");

  // Create a new table row
  const row = document.createElement("tr");
  row.classList.add("border-b", "hover:bg-gray-100");
  row.innerHTML = `
    <td class="py-3 px-4">${studentCount}</td>
    <td class="py-3 px-4">${name}</td>
    <td class="py-3 px-4">${studentId}</td>
    <td class="py-3 px-4">${phone}</td>
    <td class="py-3 px-4">${email}</td>
  `;

  tableBody.appendChild(row);

  // Clear form after adding
  document.getElementById("studentForm").reset();
}
