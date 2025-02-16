document.getElementById('atualizar').addEventListener('click', fetchData);

function fetchData() {
  const url = 'SUA_URL_DO_APPS_SCRIPT'; // Substitua pela URL do seu Apps Script
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const respostasDiv = document.getElementById('respostas');
      respostasDiv.innerHTML = '';
      data.forEach((linha, index) => {
        const linhaDiv = document.createElement('div');
        linhaDiv.textContent = `Resposta ${index + 1}: ${linha.join(', ')}`;
        respostasDiv.appendChild(linhaDiv);
      });
    })
    .catch(error => console.error('Erro:', error));
}
