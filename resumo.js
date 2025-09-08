window.onload = function() {
    // limpa todos os campos
    document.getElementById('Local').innerText = '';
    document.getElementById('Data').innerText = '';
    document.getElementById('Hora').innerText = '';
    document.getElementById('Envolvidos').innerText = '';
    document.getElementById('Veiculos').innerText = '';
    document.getElementById('Objetos').innerText = '';
    document.getElementById('Descrição').innerText = '';

    //ROUBO E FURTO
    let roubo = sessionStorage.getItem('roubo');
    if (roubo) {
        roubo = JSON.parse(roubo);
        document.getElementById('Local').innerText = roubo.local_roubo;
        document.getElementById('Data').innerText = roubo.data_roubo;
        document.getElementById('Hora').innerText = roubo.hora_roubo;
        document.getElementById('Objetos').innerText = roubo.objetos_roubo;
        document.getElementById('Descrição').innerText = roubo.descricao_roubo;
        return;
    }

    // VIOLENCIA DOMESTICA
    let violencia = sessionStorage.getItem('violencia');
    if (violencia) {
        violencia = JSON.parse(violencia);
        document.getElementById('Local').innerText = violencia.local_violencia;
        document.getElementById('Data').innerText = violencia.data_violencia;
        document.getElementById('Hora').innerText = violencia.hora_violencia;
        document.getElementById('Envolvidos').innerText = acidente.envolvidos_acidente;
        document.getElementById('Objetos').innerText = violencia.objetos_violencia;
        document.getElementById('Descrição').innerText = violencia.descricao_violencia;
        return;
    }

    // ACIDENTE DE TRANSSITO
    let acidente = sessionStorage.getItem('acidente');
    if (acidente) {
        acidente = JSON.parse(acidente);
        document.getElementById('Local').innerText = acidente.local_acidente;
        document.getElementById('Data').innerText = acidente.data_acidente;
        document.getElementById('Hora').innerText = acidente.hora_acidente;
        document.getElementById('Envolvidos').innerText = acidente.envolvidos_acidente;
        document.getElementById('Veículo').innerText = acidente.veiculo_acidente;
        document.getElementById('Descrição').innerText = acidente.descricao_acidente;
        return;
    }

    // CALUNIA, INJÚRIA E DIFAMAÇÃO
    let calunia = sessionStorage.getItem('calunia');
    if (calunia) {
        calunia = JSON.parse(calunia);
        document.getElementById('Local').innerText = calunia.local_calunia;
        document.getElementById('Data').innerText = calunia.data_calunia;
        document.getElementById('Envolvidos').innerText = calunia.envolvidos_calunia;
        document.getElementById('Descrição').innerText = calunia.descricao_calunia;
        return;
    }
}