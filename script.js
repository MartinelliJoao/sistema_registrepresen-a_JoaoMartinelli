document.addEventListener("DOMContentLoaded", () => {  // Espera a página carregar totalmente antes de rodar o código
  const form = document.getElementById("attendanceForm");  // Pega o formulário da página de registro
  const attendanceList = document.getElementById("attendanceList");  // Pega a lista onde mostra as presenças
  const statusSelect = document.getElementById("status");  // Pega o campo de status (Presente/Falta)
  const reasonGroup = document.getElementById("reasonGroup");  // Pega o grupo do motivo da falta (campo que aparece só se for falta)

  const registros = JSON.parse(localStorage.getItem("registros") || "[]");  // Pega os registros salvos no localStorage, ou cria um array vazio

  // Mostra ou esconde campo de motivo conforme o status escolhido. 
  if (statusSelect) {
    statusSelect.addEventListener("change", () => {
      reasonGroup.style.display = statusSelect.value === "Falta" ? "block" : "none";  // Se for falta mostra o campo, se não, esconde
    });
  }

  // Se estiver na página do formulário de registro
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();  // Evita o envio padrão do formulário, para poder controlar

      const studentName = document.getElementById("studentName").value.trim();  // Pega e limpa o nome do aluno
      const date = document.getElementById("date").value;  // Pega a data
      const status = document.getElementById("status").value;  // Pega o status (Presente/Falta)
      const reason = document.getElementById("reason").value.trim();  // Pega e limpa o motivo da falta

      if (!studentName || !date) {  // Verifica se o nome ou data estão vazios
        alert("Por favor, preencha todos os campos.");  // Mostra alerta pedindo para preencher
        return;  // Para a função, não continua
      }

      const registro = {  // Cria um objeto com os dados do registro
        nome: studentName,
        data: date,
        status,
        motivo: status === "Falta" ? reason : "",  // Se for falta guarda o motivo, se não, deixa vazio
      };

      registros.push(registro);  // Adiciona o registro no array
      localStorage.setItem("registros", JSON.stringify(registros));  // Salva o array no localStorage como texto
      alert("Registro salvo com sucesso!");  // Mostra alerta de sucesso

      form.reset();  // Limpa o formulário
      reasonGroup.style.display = "none";  // Esconde o campo do motivo da falta
    });
  }

  // Se estiver na página da lista de presenças
  if (attendanceList) {
    renderizarLista();  // Chama a função para mostrar os registros na tela

    function renderizarLista() {
      attendanceList.innerHTML = "";  // Limpa a lista antes de mostrar

      if (registros.length === 0) {  // Se não tiver nenhum registro
        attendanceList.innerHTML = "<p>Nenhum registro encontrado.</p>";  // Mostra mensagem de nenhum registro
        return;  // Para a função
      }

      registros.forEach((registro, index) => {  // Para cada registro no array
        const li = document.createElement("li");  // Cria um item da lista

        const dataFormatada = new Date(registro.data).toLocaleDateString("pt-BR");  // Formata a data para o padrão brasileiro
        li.innerHTML = `
          <span>
            ${registro.nome} - ${dataFormatada} - ${registro.status}
            ${registro.status === "Falta" ? `❗(${registro.motivo || "Sem motivo"})` : ""}  <!-- Se for falta, mostra o motivo ou "Sem motivo" -->
          </span>
          <button class="remove-btn" data-index="${index}">Remover</button>  <!-- Botão para remover este registro -->
        `;

        attendanceList.appendChild(li);  // Adiciona o item na lista
      });

      const botoesRemover = document.querySelectorAll(".remove-btn");  // Pega todos os botões remover
      botoesRemover.forEach((btn) => {  // Para cada botão
        btn.addEventListener("click", () => {  // Quando clicar no botão
          const index = btn.getAttribute("data-index");  // Pega o índice do registro no array
          registros.splice(index, 1);  // Remove o registro do array
          localStorage.setItem("registros", JSON.stringify(registros));  // Atualiza o localStorage
          renderizarLista();  // Atualiza a lista na tela
        });
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {  // Espera a página carregar totalmente antes de rodar o código
  const form = document.getElementById("attendanceForm");  // Pega o formulário da página de registro
  const attendanceList = document.getElementById("attendanceList");  // Pega a lista onde mostra as presenças
  const statusSelect = document.getElementById("status");  // Pega o campo de status (Presente/Falta)
  const reasonGroup = document.getElementById("reasonGroup");  // Pega o grupo do motivo da falta (campo que aparece só se for falta)

  const registros = JSON.parse(localStorage.getItem("registros") || "[]");  // Pega os registros salvos no localStorage, ou cria um array vazio

  // Mostra ou esconde campo de motivo conforme o status escolhido
  if (statusSelect) {
    statusSelect.addEventListener("change", () => {
      reasonGroup.style.display = statusSelect.value === "Falta" ? "block" : "none";  // Se for falta mostra o campo, se não, esconde
    });
  }

  // Se estiver na página do formulário de registro
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();  // Evita o envio padrão do formulário, para poder controlar

      const studentName = document.getElementById("studentName").value.trim();  // Pega e limpa o nome do aluno
      const date = document.getElementById("date").value;  // Pega a data
      const status = document.getElementById("status").value;  // Pega o status (Presente/Falta)
      const reason = document.getElementById("reason").value.trim();  // Pega e limpa o motivo da falta

      if (!studentName || !date) {  // Verifica se o nome ou data estão vazios
        alert("Por favor, preencha todos os campos.");  // Mostra alerta pedindo para preencher
        return;  // Para a função, não continua
      }

      const registro = {  // Cria um objeto com os dados do registro
        nome: studentName,
        data: date,
        status,
        motivo: status === "Falta" ? reason : "",  // Se for falta guarda o motivo, se não, deixa vazio
      };

      registros.push(registro);  // Adiciona o registro no array
      localStorage.setItem("registros", JSON.stringify(registros));  // Salva o array no localStorage como texto
      alert("Registro salvo com sucesso!");  // Mostra alerta de sucesso

      form.reset();  // Limpa o formulário
      reasonGroup.style.display = "none";  // Esconde o campo do motivo da falta
    });
  }

  // Se estiver na página da lista de presenças
  if (attendanceList) {
    renderizarLista();  // Chama a função para mostrar os registros na tela

    function renderizarLista() {
      attendanceList.innerHTML = "";  // Limpa a lista antes de mostrar

      if (registros.length === 0) {  // Se não tiver nenhum registro
        attendanceList.innerHTML = "<p>Nenhum registro encontrado.</p>";  // Mostra mensagem de nenhum registro
        return;  // Para a função
      }

      registros.forEach((registro, index) => {  // Para cada registro no array
        const li = document.createElement("li");  // Cria um item da lista

        const dataFormatada = new Date(registro.data).toLocaleDateString("pt-BR");  // Formata a data para o padrão brasileiro
        li.innerHTML = `
          <span>
            ${registro.nome} - ${dataFormatada} - ${registro.status}
            ${registro.status === "Falta" ? `❗(${registro.motivo || "Sem motivo"})` : ""}  <!-- Se for falta, mostra o motivo ou "Sem motivo" -->
          </span>
          <button class="remove-btn" data-index="${index}">Remover</button>  <!-- Botão para remover este registro -->
        `;

        attendanceList.appendChild(li);  // Adiciona o item na lista
      });

      const botoesRemover = document.querySelectorAll(".remove-btn");  // Pega todos os botões remover
      botoesRemover.forEach((btn) => {  // Para cada botão
        btn.addEventListener("click", () => {  // Quando clicar no botão
          const index = btn.getAttribute("data-index");  // Pega o índice do registro no array
          registros.splice(index, 1);  // Remove o registro do array
          localStorage.setItem("registros", JSON.stringify(registros));  // Atualiza o localStorage
          renderizarLista();  // Atualiza a lista na tela
        });
      });
    }
  }
});
