AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const dataDoEncerramento = new Date("Sep 21, 2023 11:55:00");
const timestampDoEvento = dataDoEvento.getTime();
const timestampEncerramento = dataDoEncerramento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timestampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const distanciaAteOEvento = timestampDoEvento - timestampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);;
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
  
    const span = document.querySelector('#contador');
    
    if (timestampAtual < timestampDoEvento) {
        span.innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    } else if (timestampAtual > timestampDoEvento && timestampAtual < timestampEncerramento) {
        span.innerHTML = 'começou! 🥳';
    } else {
        clearInterval(contaAsHoras);
        span.innerHTML = 'já aconteceu. Você foi lento. 😔';
    }
}, 1000)