function registrarPresenca() {
    const checkboxes = document.querySelectorAll('input[name="aluno"]:checked');
    const resultado = document.getElementById('resultado');

    if (checkboxes.length === 0) {
        resultado.innerHTML = "<p>Nenhum aluno foi marcado como presente.</p>";
        return;
    }

    const alunosPresentes = Array.from(checkboxes).map(cb => cb.value);

    resultado.innerHTML = `
        <h2>Alunos Presentes:</h2>
        <ul>
            ${alunosPresentes.map(aluno => `<li>${aluno}</li>`).join('')}
        </ul>
    `;
}
