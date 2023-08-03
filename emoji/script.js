function lang(value) {
    if (value == 'pt-br') {
        window.location = window.location
    } else {
        window.location = 'en-us.html'
    }
}
function partilhar() {
    var audio = new Audio('./sounds/copySound.wav');
    audio.volume = 0.05;
    audio.play();
    navigator.clipboard.writeText(window.location);
    var copyElement = document.getElementById('partilhar');
    copyElement.style.display = "block"
    partilharAnimation()
    setTimeout(partilharEnd, 3000);
}
function partilharEnd() {
    var copyElement = document.getElementById('partilhar');
    copyElement.style.display = "none"
}
function partilharAnimation() {
    let id = null;
    const elem = document.getElementById("partilhar");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 8) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "vh";
        }
    }
}
function alerta(value) {
    var audio = new Audio('./sounds/copySound.wav');
    audio.volume = 0.05;
    // audio.play()
    if (value == 'instagram') {
        audio.play();
        var redId = document.getElementById('alert-insta');
        var link = document.getElementById('link')
        var social = document.getElementById('social')
        link.setAttribute("value", "https://www.instagram.com/rafaelparroni/")
        social.setAttribute("value", "alert-insta")
        redId.style.display = "block"
        StartAlertAnimation('alert-insta')

    } else if (value == 'github') {
        audio.play();
        var redId = document.getElementById('alert-github');
        var link = document.getElementById('link')
        var social = document.getElementById('social')
        link.setAttribute("value", "https://github.com/RafaelParoni")
        social.setAttribute("value", "alert-github")
        redId.style.display = "block"
        StartAlertAnimation('alert-github')

    } else if (value == 'website') {
        audio.play();
        var redId = document.getElementById('alert-website');
        var link = document.getElementById('link')
        var social = document.getElementById('social')
        link.setAttribute("value", "https://rafaelparoni.netlify.app/")
        social.setAttribute("value", "alert-website")
        redId.style.display = "block"
        StartAlertAnimation('alert-website')

    } else if (value == 'confirm') { // confirm
        window.location = document.getElementById('link').getAttribute('value')
    } else if (value == 'no-confirm') {
        var id = document.getElementById('social').getAttribute('value')
        var redId = document.getElementById(id)
        EndAlertAnimation(id)
        setTimeout(close, 400);
    }
}
function close() {
    var id = document.getElementById('social').getAttribute('value')
    var redId = document.getElementById(id)
    redId.style.display = "none"
}
function StartAlertAnimation(value) {
    let id = null;
    const elem = document.getElementById(value);
    let posMAIS = -15;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (posMAIS == 8) {
            clearInterval(id);
        } else {
            posMAIS++;
            elem.style.top = posMAIS + "vh";
        }
    }
}
function EndAlertAnimation(value) {
    let id = null;
    const elem = document.getElementById(value);
    let posMENOS = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (posMENOS == -15) {
            clearInterval(id);
        } else {
            posMENOS--;
            elem.style.top = posMENOS + "vh";
        }
    }
    
}
function red(value){
    if(value == 'faces'){
        window.location = "#faces"
    }else if(value == 'people'){
        window.location = "#people"
    }else if(value == 'people'){
        window.location = "#people"
    }else if(value == 'animals'){
        window.location = "#animals"
    }else if(value == 'foods'){
        window.location = "#foods"
    }else if(value == 'objects'){
        window.location = "#objects"
    }else if(value == 'transport'){
        window.location = "#transport"
    }else if(value == 'symbols'){
        window.location = "#symbols"
    }
}

// copiar emojis
function copyemoji(value) {
    var audio = new Audio('./sounds/copySound.wav');
    audio.volume = 0.05;
    audio.play();
    navigator.clipboard.writeText(value);
    document.getElementById("alertCopyEmoji").innerHTML = 'Emoji copiado:' + value
    StartAlertAnimation('alertCopyEmoji')
    setTimeout(EndAlertAnimation, 3000)
    function EndAlertAnimation() {
        let id = null;
        const elem = document.getElementById('alertCopyEmoji');
        let posMENOS = 0;
        clearInterval(id);
        id = setInterval(frame, 20);
        function frame() {
            if (posMENOS == -15) {
                clearInterval(id);
            } else {
                posMENOS--;
                elem.style.top = posMENOS + "vh";
            }
        }
        
    }
    setTimeout(DeleteAlert, 3300)
    function DeleteAlert(){
        document.getElementById("alertCopyEmoji").innerHTML = ''
    }
    
}

// Criar a sintax dos botoes de emojis na pagina test!
function loadingEmoji(value) {
    LoadFaces()
    LoadAnimals()
    Loadpeople()
    LoadCelebrations()
    LoadObjects()
    LoadFoods()
}
function LoadFaces() {
    var emoji = [
        '😀', '😁', '😂', '🤣', '😃', '😎', '😄', '😋', '😋', '😉', '😆',
        '😅', '😍', '😘', '🥰', '😗', '😙', '🥲', '🤔', '🤩', '🤗', '🙂',
        '😚', '🫡', '🤨', '😐', '😑', '😶', '🫥', '😮', '😥', '😣', '😏',
        '🙄', '😶‍🌫️', '🤐', '😯', '😪', '😫', '🥱', '😴', '😒', '🤤', '😝',
        '😜', '😛', '😌', '😛', '😜', '😝', '🤤', '😒', '🫠', '🙃', '🫤',
        '😕', '😔', '😓', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😧', '😦',
        '😭', '😢', '😤', '😟', '😨', '😩', '🤯', '😬', '😮‍💨', '😰', '😵',
        '🤪', '😳', '🥵', '🥶', '😱', '😵‍💫', '🥴', '😠', '😡', '🤬', '😷',
        '😇', '🤧', '🤮', '🤢', '🤕', '🤒', '🥳', '🥸', '🥺', '🥹', '🤠',
        '🤡', '🧐', '🫣', '🤭', '🤫', '🤥', '🤓', '😈', '👿', '👹', '👺',
        '💀', '💩', '🤖', '👾', '👽', '👻', '☠️', '🧞‍♀️', '🧞‍♂️', '🧞', '🧟‍♀️',
        '👥', '👤', '🗣️', '🧌', '🧟', '🧟‍♂️', '🫂', '👁️', '👀', '🦴', '🦷',
        '👅', '🦾', '🫁', '🫀', '🧠', '🫦', '👄', '🦿', '👣', '🤺', '⛷️']

    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function Loadpeople() {
    var emoji = ['👩', '👩', '👨', '🧑', '👧', '👦', '🧒', '👨‍🦰', '👩‍🦰', '🧓', '👴',
        '👵', '👶', '🧑‍🦰', '👩‍🦱', '👨‍🦱', '🧑‍🦱', '👩‍🦲', '👨‍🦲', '👱‍♂️', '👱‍♀️', '🧑‍🦳', '👨‍🦳', '👩‍🦳',
        '🧑‍🦲', '👱', '👸', '🤴', '🫅', '👳‍♀️', '👳‍♂️', '👼', '🧔‍♀️', '🧔‍♂️', '🧔', '👲', '👳',
        '🤶', '🎅', '🧑‍🎄', '👮‍♀️', '👮‍♂️', '👮', '💂', '💂‍♂️', '💂‍♀️', '🕵️', '🕵️‍♂️', '🕵️‍♀️', '🥷',
        '👷‍♀️', '👷‍♂️', '👷', '👩‍⚕️', '👨‍⚕️', '👨‍🏫', '👩‍🏫', '🧑‍🎓', '👨‍🎓', '👩‍🎓', '🧑‍⚕️', '🧑‍🏫', '👩‍⚖️',
        '👨‍⚖️', '🧑‍⚖️', '👩‍🌾', '👨‍🌾', '👨‍🔧', '👩‍🔧', '🧑‍🍳', '👨‍🍳', '👩‍🍳', '🧑‍🌾', '🧑‍🔧', '👩‍🏭', '👨‍🏭',
        '🧑‍🏭', '👩‍💼', '👨‍💼', '👨‍💻', '👩‍💻', '🧑‍🔬', '👨‍🔬', '👩‍🔬', '🧑‍💼', '🧑‍💻', '👩‍🎤', '👨‍🎤', '🧑‍🎤',
        '👩‍🎨', '👨‍🎨', '👨‍🚀', '👩‍🚀', '🧑‍✈️', '👨‍✈️', '👩‍✈️', '🧑‍🎨', '👰‍♂️', '🧑‍🚀', '👩‍🚒', '👰', '👨‍🚒',
        '🤵‍♀️', '🤵‍♂️', '🧑‍🚒', '🧕', '🤵', '🤱', '👰‍♀️', '🫄', '🫃', '🤰', '🧑‍🍼', '👨‍🍼', '👩‍🍼',
        '🦸‍♀️', '🦸‍♂️', '🦸', '🦹‍♀️', '🦹‍♂️', '🦹', '🧚', '🧚‍♀️', '🧚‍♂️', '🧙', '🧙‍♂️', '🧙‍♀️', '🧛‍♀️',
        '🧛‍♂️', '🧛', '🧜‍♀️', '🧜‍♂️', '🧜', '🙍', '🙍‍♂️', '🙍‍♀️', '🧝', '🧝‍♂️', '🧝‍♀️', '🙎‍♀️', '🙎‍♂️',
        '🙎', '🙅‍♀️', '🙅‍♂️', '🙅', '🧏', '🧏‍♂️', '🧏‍♀️', '🙆', '🙆‍♂️', '🙆‍♀️', '💁‍♀️', '💁‍♂️', '💁',
        '🙋‍♀️', '🙋‍♂️', '🙋', '🤦', '🤦‍♂️', '🤦‍♀️', '🙇', '🙇‍♂️', '🙇‍♀️', '🤷‍♀️', '🤷‍♂️', '🤷', '💆‍♀️',
        '💆‍♂️', '💆', '🧖', '🧖‍♂️', '🧖‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🤹‍♀️', '🤹‍♂️', '🤹', '👩‍🦽', '👨‍🦽',
        '🧑‍🦽', '🧑‍🦯', '👨‍🦯', '👩‍🦯', '🧑‍🦼', '👨‍🦼', '👩‍🦼', '🧎‍♀️', '🧎‍♂️', '🧎', '🧍‍♀️', '🧍‍♂️', '🧍',
        '🏃', '🏃‍♂️', '🏃‍♀️', '🚶', '🚶‍♂️', '🚶‍♀️', '💃', '🕺', '🧗‍♀️', '🧗‍♂️', '🧗', '🧘‍♀️', '🏇',
        '🕴️', '🛌', '🛀', '🧘', '🧘‍♂️', '🏂', '🏌️‍♀️', '🏌️‍♂️', '🏌️', '🏄‍♀', '🏄‍♂️', '🏊‍♂️', '🏊‍♀️',
        '🚣', '🚣‍♂️', '🚣‍♀️', '🏄', '🏊', '🤽‍♀️', '🤽‍♂️', '🤽', '🤾‍♀️', '🤾‍♂️', '🏋️‍♂️', '🏋️‍♀️', '⛹️',
        '⛹️‍♂️', '⛹️‍♀️', '🤾', '🏋️', '🚴‍♀️', '🚴‍♂️', '🚴', '🚵‍♀️', '🚵‍♂️', '🤸', '🤸‍♂️', '🤸‍♀️', '🚵',
        '🤼‍♀️', '🤼‍♂️', '🤼', '👯‍♀️', '👯', '👯‍♂️', '💑', '💏', '👪', '👨‍👩‍👧‍👦', '👩‍👦', '👩‍👧‍👦', '🧑‍🤝‍🧑']
    // ','

    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function Loadsignal() {
    var emoji = ['🤳', '💪', '👃', '🦻', '👂', '🦶', '🦵', '👈', '👉', '☝️', '🫵', '👆', '👇',
        '🫲', '🫱', '🖖', '🫰', '🤞', '✌️', '🫳', '🫴', '🤘', '🤙', '🖐️', '✋', '👊',
        '✊', '👎', '👍', '🤌', '👌', '🤛', '🤜', '🤚', '👋', '🤟', '✍️', '🙏', '🤲',
        '🫶', '🙌', '👐', '👏', '💅']
    // ','

    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadAnimals() {
    var emoji = ['😺', '😸', '😹', '😻', '😼', '😽', '🙊', '🙉', '🙈', '😾',
        '😿', '🙀', '🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🐗', '🐷', '🐮', '🦝', '🦊',
        '🦒', '🐭', '🐹', '🐰', '🐻', '🐻‍❄️', '🐨', '🐔', '🦄', '🐴', '🦓', '🐸', '🐼',
        '🐲', '🐽', '🐾', '🐒', '🦍', '🦧', '🐈‍⬛', '🐈', '🐕', '🐩', '🐕‍🦺', '🦮', '🐅',
        '🐆', '🐎', '🦌', '🦬', '🦏', '🐏', '🐖', '🐄', '🐃', '🐂', '🦛', '🐑', '🐐', '🐪',
        '🐫', '🦙', '🦘', '🐁', '🦣', '🐘', '🦡', '🦨', '🦥', '🐀', '🦔', '🐇', '🐿️', '🦫', '🦎', '🦖',
        '🦕', '🐉', '🐍', '🐢', '🐊', '🦦', '🦈', '🐬', '🦭', '🐳', '🐋', '🐙', '🦑',
        '🦐', '🐡', '🐠', '🐟', '🦞', '🦀', '🐚', '🪸', '🦆', '🐓', '🦩', '🦜', '🦢', '🕊️',
        '🦅', '🦃', '🦚', '🦉', '🦤', '🐦', '🐧', '🐌', '🦋', '🪶', '🦇', '🐣', '🐤',
        '🐥', '🐛', '🦟', '🪰', '🪱', '🦗', '🐜', '🕷️', '🦂', '🐞', '🪲', '🐝', '🪳', '🕸️']
    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadNature() {
    var emoji = ['🌵', '🎄', '🌲', '🌳', '🌴', '🪹', '🪺', '🪵 ', '🌱', ' 🌿 ', '☘️', ' 🍀',
        '🎍 ', '🪴 ', '🎋 ', '🍃 ', '🍂 ', '🍁 ', '🍄 ', '🐚 ', '🪨 ', '🌾 ', '💐', ' 🌷', ' 🪷',
        ' 🌹', ' 🥀', ' 🌺', '🌸', ' 🌼', ' 🌻 ', '🌞 ', '🌝', ' 🌛', ' 🌜', ' 🌚 ', '🌕 ', '🌖',
        '🌗', ' 🌘', ' 🌑', ' 🌒 ', '🌓', ' 🌔', '🌙 ', '🌎', ' 🌍 ', '🌏 ', '🪐 ', '💫', ' ⭐️',
        '🌟 ', '✨ ', '⚡️ ', '☄️ ', '💥 ', '🔥 ', '🌈', '☀️', '🌤️', '⛅️', '☁️', '🌦️', '🌥️', '🌧️',
        '☁️', '⛅', '🌨️', '🌩️', '🌪️', '🌫️', ' ❄️ ', '☃️', ' ⛄️ ', ' 💨 ', '💧 ', '💦 ', '🫧',
        ' ☔️', ' ☂️ ', '🌊',]
    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadCelebrations() {
    var emoji = ['🎇', '🎈', '🎆', '🎇', '🧨', '✨', '🎉',
        '🎊', '🎃', '🎄', '🎋', '🎍', '🎎', '🎁', '🎀', '🧧',
        '🎑', '🎐', '🎏', '🎗️', '🎪']
    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadObjects() {
     var emoji = ['🥼', '🎞️', '🎟️', '🎫', '🛝', '🎨', '🖼️', '🎭', '🎪', '🎢', '🎡', '🧵', '🪡', '🧶', '🪢', '🛒', '👓', '👔', '🧦', '🧥', '🧤', '🥼', '🧣', '🩳', '🥽', '🦺', '🕶️', '👕', '👖', '👗', '🥻', '👘', '👚', '🩲', '🩱', '🎒', '🛍️', '👝', '👜', '👛', '👙', '🩴', '👞', '👟', '🥾', '🥿', '👠', '👡', '👢', '🩰', '👑', '🧢', '🪖', '⛑️', '👒', '🎩', '🎓', '💋', '💄', '💍', '💎', '⚽', '⚾', '🥎', '🏀', '🏐', '🏈', '🏉', '🎱', '🎳','🥌','⛳','⛸️','🎣','🤿','🎽','🛶','🎿','🛷','🥅','🏒','🥍','🏏','🏑','🏓','🏸','🥏','🎾','🪁','🎯','🥊','🥋','🥇','🥈','🥉','🏅','🎖️','🏆','🎮','🎰','🕹️','🎲','🔮','🪄','🧿','🪬','🧩','🪅','🪩','🪆','🪀','🎴','🃏','🀄','♟️','♠️','♣️','♥️','♦️','🔈','🔉','🔊','📢','📣','🔔','🎼','🎵','🎶','🎙️','🎤','🎚️','🎛️','🎧','📯','🥁','🪘','🎷','🪗','🎺','🎸','🪕','🎻','🎹','📻','🔒','🔓','🔏','🔐','🔑','🗝️','🪓','🔨','⛏️','⚒️','🛠️','🔧','🪛','🔩','🧱','🪨','🪵','🛖','⚙️','🗜️','🛢️','⚗️','🧪','🧫','🧬','🩺','🩸','🩹','🩼','💊','🔬','🔭','⚖️','📿','🔗','⛓️','🪝','🧰','🧲','🪜','🦯','🛡️','🪚','🏹','🗡️','⚔️','🔪','🫙','💣','🔫','🪃','☎️','📟','📠','📱','📲','📳','📴','♂️','♀️','⚧️','🪧','🗿','⚱️','⚰️','🚬','🪪','🔋','🪫','🔌','💻','🖥️','💾','💽','🖲️','🖱️','⌨️','🖨️','💿','📀','🧮','🎥','🎬','📽️','📼','📹','📸','📷','📺','📡','🔍','🔎','🕯️','🪔','💡','🔦','📘','📗','📖','📕','📔','🏮','📙','📚','📓','📒','📃','📜','🏷️','🔖','🗞️','📰','📑','📄','💰','🪙','💴','💵','💶','💷','📧','✉️','🏧','🧾','💳','💸','📨','📩','📤','📥','📦','📫','✏️','🗳️','📮','📭','📬','📪','✒️','🖋️','🖊️','🖌️','🖍️','📝','📅','🗂️','📂','📁','💼','🗒️','🗒️','🗓️','📇','📉','📊','📈','📏','🖇️','📎','📍','📌','📋','📐','✂️','🗃️','🗄️','🗑️','⌛','🕰️','⏲️','⏱️','⏰','⌚','⏳']
    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadFoods() { 
    var emoji = ['🍕','🍏',' 🍎',' 🍐',' 🍊',' 🍋',' 🍌',' 🍉',' 🍇 ','🍓 ','🫐',' 🍈 ','🍒',' 🍑',' 🥭',
    ' 🍍',' 🥥',' 🥝',' 🍅',' 🍆 ','🥑 ','🥦','🥬',' 🥒 ','🌶',' 🫑',' 🌽',' 🥕',' 🫒 ','🧄 ','🧅 ','🥔',' 🍠',' 🫘 ','🥐',
    ' 🥯',' 🍞 ','🥖',' 🥨',' 🧀',' 🥚 ','🍳 ','🧈 ','🥞',' 🧇 ','🥓 ','🥩 ','🍗',' 🍖 ','🦴 ','🌭 ','🍔 ','🍟',' 🍕',' 🫓',
    ' 🥪 ','🥙 ','🧆 ','🌮 ','🌯 ','🫔 ','🥗 ','🥘','🫕',' 🥫','🍝','🍜',' 🍲',' 🍛',' 🍣',' 🍱',' 🥟',' 🦪',' 🍤',' 🍙',' 🍚 ',
    '🍘 ','🍥 ','🥠 ','🥮 ','🍢 ','🍡 ','🍧 ','🍨',' 🍦',' 🥧',' 🧁 ','🍰 ','🎂 ','🍮 ','🍭',' 🍬 ','🍫',' 🍿 ','🍩 ','🍪 ','🌰 ',
    '🥜',' 🍯 ','🥛 ','🍼 ','🫖 ','☕️',' 🍵',' 🧃',' 🥤 ','🧋',' 🫙',' 🍶 ','🍺',' 🍻',' 🥂',' 🍷 ','🫗 ','🥃 ','🍸 ','🍹 ','🧉',
    ' 🍾',' 🧊 ','🥄 ','🍴 ','🍽',' 🥣 ','🥡 ','🥢',' 🧂']
    var i = 0
    var total = emoji.length - 1;
    while (i <= total) {
        console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
        i++
    }
}
function LoadTrnasport() {
    var emoji = ['🚗','🚕',' 🚙',' 🚌',' 🚎 ','🏎 ','🚓',' 🚑',' 🚒',' 🚐',' 🛻',' 🚚',' 🚛 ','🚜',' 🦯',' 🦽',' 🦼',' 🛴',' 🚲',' 🛵',' 🏍',' 🛺 ','🚨',' 🚔 ','🚍',' 🚘 ','🚖 ','🛞',' 🚡',' 🚠',' 🚟 ','🚃 ','🚋',' 🚞',' 🚝',' 🚄 ','🚅 ','🚈',' 🚂 ','🚆',' 🚇 ','🚊',' 🚉',' ✈️',' 🛫',' 🛬',' 🛩',' 💺',' 🛰',' 🚀',' 🛸',' 🚁',' 🛶',' ⛵️',' 🚤',' 🛥',' 🛳',' ⛴ ','🚢',' ⚓️',' 🛟',' 🪝',' ⛽️',' 🚧',' 🚦 ','🚥',' 🚏']
   var i = 0
   var total = emoji.length - 1;
   while (i <= total) {
       console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

       var divNova = document.createElement("div");
       var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
       divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

       // adiciona o novo elemento criado e seu conteúdo ao DOM
       var divAtual = document.getElementById("div1");
       document.body.insertBefore(divNova, divAtual);
       i++
   }
}
function LoadLocations() {
    var emoji = ['🗺 ','🗿',' 🗽',' 🗼',' 🏰',' 🏯',' 🏟',' 🎡 ','🎢 ','🛝',' 🎠',' ⛲️',' ⛱',' 🏖 ','🏝',' 🏜 ','🌋',
     '⛰',' 🏔 ','🗻',' 🏕 ','⛺️ ','🛖','🏠',' 🏡',' 🏘',' 🏚',' 🏗',' 🏭',' 🏢',' 🏬 ','🏣',' 🏤',' 🏥',' 🏦 ','🏨',
     ' 🏪',' 🏫 ','🏩 ','💒',' 🏛 ','⛪️',' 🕌 ','🕍 ','🛕 ','🕋 ','⛩',' 🛤 ','🛣 ','🗾',' 🎑',' 🏞',' 🌅',' 🌄',
     ' 🌠',' 🎇',' 🎆',' 🌇 ','🌆',' 🏙',' 🌃 ','🌌',' 🌉',' 🌁']
   var i = 0
   var total = emoji.length - 1;
   while (i <= total) {
       console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

       var divNova = document.createElement("div");
       var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
       divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

       // adiciona o novo elemento criado e seu conteúdo ao DOM
       var divAtual = document.getElementById("div1");
       document.body.insertBefore(divNova, divAtual);
       i++
   }
}
function LoadSymbols() {
    var emoji = ['❤️',' 🩷',' 🧡 ','💛',' 💚',' 💙 ','🩵',' 💜',' 🖤',' 🩶',' 🤍',' 🤎 ','❤️‍🔥',' ❤️‍🩹 ','💔',' ❣️',' 💕 ',
    '💞',' 💓 ','💗',' 💖',' 💘',' 💝',' 💟',' ☮️',' ✝️ ','☪️ ','🪯 ','🕉 ','☸️',' ✡️','🔯 ','🕎 ','☯️ ','☦️',' 🛐',
    ' ⛎ ','♈️',' ♉️','♊️ ','♋️ ','♌️ ','♍️ ','♎️',' ♏️ ','♐️ ','♑️ ','♒️ ','♓️ ','🆔 ','⚛️',' 🉑',' ☢️',' ☣️',
    ' 📴 ','📳',' 🈶',' 🈚️',' 🈸',' 🈺',' 🈷️',' ✴️',' 🆚',' 💮',' 🉐 ','㊙️ ','㊗️ ','🈴',' 🈵 ','🈹 ','🈲 ','🅰️ ',
    '🅱️ ','🆎',' 🆑 ','🅾️ ','🆘 ','❌ ','⭕️',' 🛑',' ⛔️',' 📛',' 🚫 ','💯 ','💢',' ♨️',' 🚷 ','🚯 ','🚳 ','🚱 ',
    '🔞 ','📵',' 🚭 ','❗️','❓','❔ ','‼️ ','⁉️ ','🔅',' 🔆',' 〽️ ','⚠️',' 🚸',' 🔱 ','⚜️ ','🔰 ','♻️ ','✅ ','🈯️ ',
    '💹 ','❇️ ','✳️ ','❎',' 🌐 ','💠',' Ⓜ️',' 🌀',' 💤',' 🏧',' 🚾 ','♿️ ','🅿️',' 🛗',' 🈳',' 🈂️ ','🛂 ','🛃 ',
    '🛄',' 🛅',' 🚹',' 🚺',' 🚼 ','⚧ ','🚻 ','🚮 ','🎦',' 🛜',' 📶',' 🈁',' 🔣',' ℹ️ ','🔤 ','🔡 ','🔠 ','🆖',' 🆗 ',
    '🆙 ','🆒 ','🆕',' 🆓',' 0️⃣','1️⃣ ','2️⃣',' 3️⃣ ','4️⃣ ','5️⃣ ','6️⃣ ','7️⃣ ','8️⃣',' 9️⃣',' 🔟',' 🔢 ','#️⃣ ','*️⃣ ',
    '⏏️ ','▶️ ','⏸ ','⏯ ','⏹ ','⏺ ','⏭ ','⏮',' ⏩',' ⏪ ','⏫ ','⏬ ','◀️',' 🔼 ','🔽 ','➡️ ','⬅️ ','⬆️ ',
    '⬇️',' ↗️',' ↘️ ','↙️ ','↕️',' ↔️ ','↪️ ','↩️ ','⤴️ ','⤵️',' 🔀 ','🔁 ','🔂 ','🔄',' 🔃',' ','🎵 ','🎶',' ➕',
    '➖ ','➗ ','✖️ ','🟰 ','♾ ','💲 ','💱 ','™️ ','©️ ','®️ ','〰️ ','➰',' ➿',' 🔚 ','🔙 ','🔛 ','🔝 ','🔜',
    ' ✔️ ','☑️',' 🔘','🔴',' 🟠',' 🟡 ','🟢 ','🔵 ','🟣 ','⚫️',' ⚪️',' 🟤',' 🔺','🔻','🔸',' 🔹 ','🔶 ','🔷',' 🔳 ',
    '🔲 ','▪️',' ▫️ ','◾️ ','◽️',' ◼️ ','◻️ ','🟥 ','🟧 ','🟨 ','🟩 ','🟦 ','🟪',' ⬛️ ','⬜️ ','🟫 ','🔈 ','🔇 ','🔉 ',
    '🔊 ','🔔 ','🔕 ','📣 ','📢 ','👁‍🗨',' 💬',' 💭',' 🗯',' ♠️',' ♣️',' ♥️',' ♦️',' 🃏',' 🎴 ','🀄️ ','🕐 ','🕑 ','🕒 ',
    '🕓 ','🕔 ','🕕',' 🕖',' 🕗 ','🕘',' 🕙 ','🕚 ','🕛 ','🕜 ','🕝 ','🕞',' 🕟',' 🕠 ','🕡 ','🕢 ','🕣 ','🕤 ',
    '🕥',' 🕦 ','🕧']
   var i = 0
   var total = emoji.length - 1;
   while (i <= total) {
       console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

       var divNova = document.createElement("div");
       var conteudoNovo = document.createTextNode("<button class='emoji-btn' onclick='copyemoji(" + '"' + emoji[i] + '"' + ")' >" + emoji[i] + "</button>");
       divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

       // adiciona o novo elemento criado e seu conteúdo ao DOM
       var divAtual = document.getElementById("div1");
       document.body.insertBefore(divNova, divAtual);
       i++
   }
}
