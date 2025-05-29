document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('form-sorteador').addEventListener('submit', evento => {
          evento.preventDefault();
          let numeroMaximo = document.getElementById('numero-maximo').value;
          numeroMaximo = parseInt(numeroMaximo);

          let numeroAleatorio = Math.ceil(Math.random() * numeroMaximo);

          document.getElementById('resultado-valor').innerText = numeroAleatorio;
          document.querySelector('.resultado').style.display = 'block';
     });
});
