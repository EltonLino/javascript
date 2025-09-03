function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    //hora = 19; // Teste manual
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png';
        document.body.style.background = '#f7bb87';
    }
        else if (hora >= 12 && hora < 18) {
            img.src = 'img/fototarde.png';
            document.body.style.background = '#9d9c9a';
        }
        else {
            img.src = 'img/fotonoite.png';
            document.body.style.background = '#30484c';
        }
    }
