let typh = 0;
let typd = 0;
let typs = 0;
let typg = 0;
let ext = 1;
let dny = 1;

function horske() {
    let val = parseInt(kolo.horskekolo.value);
    if (kolo.horskekolo.checked)
        typh = val * document.kolo.horskeKs.value;
    else
        typh = 0;
    console.log(typh);
}
function detske() {
    let val = parseInt(kolo.detskekolo.value);
    if (kolo.detskekolo.checked)
        typd = val * document.kolo.detskeKs.value;
    else
        typd = 0;

    console.log(typd);
}
function silnicni() {
    let val = parseInt(kolo.silnicnikolo.value);
    if (kolo.silnicnikolo.checked)
        typs = val * document.kolo.silnicniKs.value;
    else
        typs = 0;

    console.log(typs);
}
function gravel() {
    let val = parseInt(kolo.gravelkolo.value);
    if (kolo.gravelkolo.checked)
        typg = val * document.kolo.gravelKs.value;
    else
        typg = 0;

    console.log(typg);
}

function extra(typ) {
    ext = parseFloat(typ.value);

    console.log(`cena typu = ${ext}`)
}

function den(sel) {
    dny = parseInt(sel.value);

    console.log(`pocet dnu ${dny}`)
}

function sum(event) {
    event.preventDefault();
    horske();
    detske();
    silnicni();
    gravel();
    let total = (typh + typd + typs + typg) * dny * ext;
    let limit = document.kolo.kolik.value;
    let isPrice = false;
    if (total != 0) {
        document.kolo.cena.value = total;
        isPrice = true;
    }
    else
        document.kolo.cena.value = "nic jsi nevybral";
    if (isPrice) {
        if (limit != 0) {
            if (limit >= total)
                document.kolo.vLimitu.value = "vejdes se do limitu";
            else
                document.kolo.vLimitu.value = "nevejdes se do limitu";
        }
        else
            document.kolo.vLimitu.value = "nezadal jsi kolik chces zaplatit";
    }
    else
        document.kolo.vLimitu.value = "neni co pocitat";
    console.log(`total ${total}`);
}

function submitMail(event) {
    event.preventDefault()
    mail = document.kolo.email.value;
    if (validation(mail))
        alert('Objednavka odeslana')
    document.kolo.email.value = 'Zadejte validni mail'
}

function handleMailInput(event){
    if(document.kolo.email.value !='@')
    document.kolo.email.value ="";
}


function validation(mail) {
    let validate = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(regexEmail))
        validate = true
    return validate;

}
