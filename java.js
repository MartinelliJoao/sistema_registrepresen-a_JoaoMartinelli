document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("attendanceForm");
  const attendanceList = document.getElementById("attendanceList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const date = document.getElementById("date").value;

    if (!studentName || !date) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${studentName} - ${new Date(date).toLocaleDateString('pt-BR')}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(removeBtn);
    attendanceList.appendChild(li);

    form.reset();
  });
});
