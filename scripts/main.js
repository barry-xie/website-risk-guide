document.getElementById('risk-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const category = document.getElementById('category').value;

  const response = await fetch(`/api/risks/${encodeURIComponent(category)}`);
  const data = await response.json();

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<h2>Risks for ${category}</h2><ul>` +
  data.risks.map(risk =>
    `<li><strong>${risk.title}</strong><br>${risk.summary}<br><em>${risk.details}</em></li>`
  ).join('') +
  '</ul><h3>Safety Tips</h3><ul>' +
  data.tips.map(tip =>
    `<li><strong>${tip.title}</strong><br>${tip.summary}<br><em>${tip.details}</em></li>`
  ).join('') +
  '</ul>';

  resultsDiv.style.display = 'block';
});