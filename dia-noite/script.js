let botao = document.getElementById('botao');
let estilo = document.getElementById('ceu');

botao.addEventListener('click', function() {
    if (botao.innerHTML == 'Modo Noturno') {
        estilo.innerHTML = `body {
            background: radial-gradient(
                closest-corner circle at 15% 15%,
                #ccc,
                #ccc 20%,
                #445 21%,
                #223 100%
          );
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            background-attachment: fixed;

            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
        }`;
        botao.innerText = 'Modo Dia';
    } else {
        estilo.innerHTML =  `
        body {
            background: radial-gradient(
                closest-corner circle at 15% 15%,
                #ffcf33,
                #ffcf33 20%,
                #ffff66 21%,
                #bbeeff 100%
            );

            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            background-attachment: fixed;

            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
        }
        `
        botao.innerHTML = 'Modo Noturno';
    }

});
