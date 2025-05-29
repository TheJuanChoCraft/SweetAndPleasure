document.querySelectorAll('.acordeon .pregunta').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const abierto = content.style.display === 'block';

    document.querySelectorAll('.acordeon .respuesta').forEach(r => r.style.display = 'none');
    
    if (!abierto) {
      content.style.display = 'block';
    }
  });
});

document.getElementById("form-quiz").addEventListener("submit", function(e) {
  e.preventDefault();

  const respuestas = [
    document.querySelector('input[name="q1"]:checked').value,
    document.querySelector('input[name="q2"]:checked').value,
    document.querySelector('input[name="q3"]:checked').value
  ];

  const puntaje = { fresa: 0, chocolate: 0, cupcake: 0 };

  respuestas.forEach(r => puntaje[r]++);

  let resultado;
  if (puntaje.fresa >= 2) {
    resultado = "🍓 Eres una Tarta de Fresa: dulce, romántico y siempre fresco.";
  } else if (puntaje.chocolate >= 2) {
    resultado = "🍫 Eres un Brownie de Chocolate: intenso, profundo y reconfortante.";
  } else {
    resultado = "🧁 Eres un Cupcake: alegre, vibrante y lleno de color.";
  }

  const div = document.getElementById("resultado-quiz");
  div.textContent = resultado;
  div.classList.remove("resultado-oculto");

  // 🎉 Explosión de confeti SOLO al ver resultado
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#f7b3da', '#c6a4e7', '#ffe0ec', '#7ec6e3']
  });
});
