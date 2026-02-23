const dataDoEvento = new Date("dec 10, 2026 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / diaEmMs);
    const horas = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "🎉 A Festa Começou!";
    }

}, 1000);