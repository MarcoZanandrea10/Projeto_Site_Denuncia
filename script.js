//ROUBO E FURTO
const salvarRoubo = function () {

    let roubo = {
        local_roubo: document.getElementById('local_roubo').value,
        data_roubo: document.getElementById('data_roubo').value,
        hora_roubo: document.getElementById('hora_roubo').value,
        objetos_roubo: document.getElementById('objetos_roubo').value,
        descricao_roubo: document.getElementById('descricao_roubo').value
    }
    sessionStorage.setItem('roubo',JSON.stringify(roubo));
}

const carregarRoubo = function () {

    let roubo = JSON.parse(sessionStorage.getItem('roubo'));    
    let mensagem = `Local: ${roubo.local_roubo} 
    \nData: ${roubo.data_roubo}
    \nHora: ${roubo.hora_roubo}
    \nObjetos: ${roubo.objetos_roubo}
    \nDescrição: ${roubo.descricao_roubo}
    `;

    console.log(mensagem);
}

// VIOLENCIA DOMESTICA
const salvarViolencia = function () {

    let violencia = {
        local_violencia: document.getElementById('local_violencia').value,
        data_violencia: document.getElementById('data_violencia').value,
        hora_violencia: document.getElementById('hora_violencia').value,
        envolvidos_violencia: document.getElementById('envolvidos_violencia').value,
        objetos_violencia: document.getElementById('objetos_violencia').value,
        descricao_violencia: document.getElementById('descricao_violencia').value
    }
    sessionStorage.setItem('violencia',JSON.stringify(violencia));
}

const carregarViolencia = function () {

    let violencia = JSON.parse(sessionStorage.getItem('violencia'));    
    let mensagem = `Local: ${violencia.local_violencia} 
    \nData: ${violencia.data_violencia}
    \nHora: ${violencia.hora_violencia}
    \nEnvolvidos: ${violencia.envolvidos_violencia}
    \nObjetos: ${violencia.objetos_violencia}
    \nDescrição: ${violencia.descricao_violencia}
    `;

    console.log(mensagem);
}

// ACIDENTE DE TRANSSITO
const salvarAcidente = function () {

    let acidente = {
        local_acidente: document.getElementById('local_acidente').value,
        data_acidente: document.getElementById('data_acidente').value,
        hora_acidente: document.getElementById('hora_acidente').value,
        envolvidos_acidente: document.getElementById('envolvidos_acidente').value,
        veiculos_acidente: document.getElementById('veiculos_acidente').value,
        descricao_acidente: document.getElementById('descricao_acidente').value
    }
    sessionStorage.setItem('acidente',JSON.stringify(acidente));
}

const carregarAcidente = function () {

    let acidente = JSON.parse(sessionStorage.getItem('acidente'));    
    let mensagem = `Local: ${acidente.local_acidente} 
    \nData: ${acidente.data_acidente}
    \nHora: ${acidente.hora_acidente}
    \nEnvolvidos: ${violencia.envolvidos_acidente}
    \nVeículos: ${violencia.veiculos_acidente}
    \nDescrição: ${acidente.descricao_acidente}
    `;

    console.log(mensagem);
}

// CALUNIA, INJÚRIA E DIFAMAÇÃO
const salvarCalunia = function () {

    let calunia = {
        local_calunia: document.getElementById('local_calunia').value,
        data_calunia: document.getElementById('data_calunia').value,
        envolvidos_calunia: document.getElementById('envolvidos_calunia').value,
        descricao_calunia: document.getElementById('descricao_calunia').value
    }
    sessionStorage.setItem('calunia',JSON.stringify(calunia));
}

const carregarCalunia = function () {

    let calunia = JSON.parse(sessionStorage.getItem('calunia'));    
    let mensagem = `Local: ${calunia.local_calunia} 
    \nData: ${calunia.data_calunia}
    \nEnvolvidos: ${calunia.envolvidos_calunia}
    \nDescrição: ${calunia.descricao_calunia}
    `;

    console.log(mensagem);
}