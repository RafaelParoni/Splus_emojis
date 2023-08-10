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
// verificar se carregou a pagina 
function checkLoad(){
    loadPeople();
    LoadFaces();
    LoadSignal();
    LoadAnimals();
    LoadNature();
    LoadCelebrations();
    LoadObjects();
    LoadFoods();
    LoadTrnasport();
    LoadLocations();
    LoadSymbols();
}
// criar botões emoji e função para copiar emojis
function loadPeople(){
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
    var loc = document.getElementById('peopleEmoji')
    while (i <= total) {
       //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'face' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
        i++
    }


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
    var loc = document.getElementById('facesEmoji')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'faces' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
        i++
    }
}
function LoadSignal() {
    var emoji = ['🤳', '💪', '👃', '🦻', '👂', '🦶', '🦵', '👈', '👉', '☝️', '🫵', '👆', '👇',
    '🫲', '🫱', '🖖', '🫰', '🤞', '✌️', '🫳', '🫴', '🤘', '🤙', '🖐️', '✋', '👊',
    '✊', '👎', '👍', '🤌', '👌', '🤛', '🤜', '🤚', '👋', '🤟', '✍️', '🙏', '🤲',
    '🫶', '🙌', '👐', '👏', '💅']
    // ','

    var i = 0
    var total = emoji.length - 1;
    var loc = document.getElementById('SignalEmoji')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'signal' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
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
    var loc = document.getElementById('AnimalsEmoji')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'Aniamls' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
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
        ' ☔️', ' ☂️ ', '🌊']

    var i = 0
    var total = emoji.length - 1;
    var loc = document.getElementById('NatureEmoji')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'aniamls' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
        i++
    }
}
function LoadCelebrations() {
    var emoji = ['🎇', '🎈', '🎆', '🎇', '🧨', '✨', '🎉',
        '🎊', '🎃', '🎄', '🎋', '🎍', '🎎', '🎁', '🎀', '🧧',
        '🎑', '🎐', '🎏', '🎗️', '🎪']

    var i = 0
    var total = emoji.length - 1;
    var loc = document.getElementById('celebrationsEmoji')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)

        var btn = document.createElement("button");
        var id = 'celebrations' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
        i++
    }
}
function LoadObjects(){
     var emoji = ['🎞️', '🎟️', '🎫', '🛝', '🎨', '🖼️', '🎭', '🎪', '🎢', '🎡', '🧵', '🪡', '🧶', '🪢', '🛒', '👓', '👔', '🧦', '🧥', '🧤', '🥼', '🧣', '🩳', '🥽', '🦺', '🕶️', '👕', '👖', '👗', '🥻', '👘', '👚', '🩲', '🩱', '🎒', '🛍️', '👝', '👜', '👛', '👙', '🩴', '👞', '👟', '🥾', '🥿', '👠', '👡', '👢', '🩰', '👑', '🧢', '🪖', '⛑️', '👒', '🎩', '🎓', '💋', '💄', '💍', '💎', '⚽', '⚾', '🥎', '🏀', '🏐', '🏈', '🏉', '🎱', '🎳','🥌','⛳','⛸️','🎣','🤿','🎽','🛶','🎿','🛷','🥅','🏒','🥍','🏏','🏑','🏓','🏸','🥏','🎾','🪁','🎯','🥊','🥋','🥇','🥈','🥉','🏅','🎖️','🏆','🎮','🎰','🕹️','🎲','🔮','🪄','🧿','🪬','🧩','🪅','🪩','🪆','🪀','🎴','🃏','🀄','♟️','♠️','♣️','♥️','♦️','🔈','🔉','🔊','📢','📣','🔔','🎼','🎵','🎶','🎙️','🎤','🎚️','🎛️','🎧','📯','🥁','🪘','🎷','🪗','🎺','🎸','🪕','🎻','🎹','📻','🔒','🔓','🔏','🔐','🔑','🗝️','🪓','🔨','⛏️','⚒️','🛠️','🔧','🪛','🔩','🧱','🪨','🪵','🛖','⚙️','🗜️','🛢️','⚗️','🧪','🧫','🧬','🩺','🩸','🩹','🩼','💊','🔬','🔭','⚖️','📿','🔗','⛓️','🪝','🧰','🧲','🪜','🦯','🛡️','🪚','🏹','🗡️','⚔️','🔪','🫙','💣','🔫','🪃','☎️','📟','📠','📱','📲','📳','📴','♂️','♀️','⚧️','🪧','🗿','⚱️','⚰️','🚬','🪪','🔋','🪫','🔌','💻','🖥️','💾','💽','🖲️','🖱️','⌨️','🖨️','💿','📀','🧮','🎥','🎬','📽️','📼','📹','📸','📷','📺','📡','🔍','🔎','🕯️','🪔','💡','🔦','📘','📗','📖','📕','📔','🏮','📙','📚','📓','📒','📃','📜','🏷️','🔖','🗞️','📰','📑','📄','💰','🪙','💴','💵','💶','💷','📧','✉️','🏧','🧾','💳','💸','📨','📩','📤','📥','📦','📫','✏️','🗳️','📮','📭','📬','📪','✒️','🖋️','🖊️','🖌️','🖍️','📝','📅','🗂️','📂','📁','💼','🗒️','🗒️','🗓️','📇','📉','📊','📈','📏','🖇️','📎','📍','📌','📋','📐','✂️','🗃️','🗄️','🗑️','⌛','🕰️','⏲️','⏱️','⏰','⌚','⏳']
     var i = 0
     var total = emoji.length - 1;
     var loc = document.getElementById('objectsEmojis')
     while (i <= total) {
         //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)
 
         var btn = document.createElement("button");
         var id = 'object' + i;
         btn.id = id;
         btn.className= "emoji-btn"
         btn.value = emoji[i];
         loc.appendChild(btn);    
         document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
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
     var loc = document.getElementById('FoodsEmojis')
     while (i <= total) {
         //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)
 
         var btn = document.createElement("button");
         var id = 'food' + i;
         btn.id = id;
         btn.className= "emoji-btn"
         btn.value = emoji[i];
         loc.appendChild(btn);    
         document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
         i++
     }
}
function LoadTrnasport() {
    var emoji = ['🚗','🚕',' 🚙',' 🚌',' 🚎 ','🏎 ','🚓',' 🚑',' 🚒',' 🚐',' 🛻',' 🚚',' 🚛 ','🚜',' 🦯',' 🦽',' 🦼',' 🛴',' 🚲',' 🛵',' 🏍',' 🛺 ','🚨',' 🚔 ','🚍',' 🚘 ','🚖 ','🛞',' 🚡',' 🚠',' 🚟 ','🚃 ','🚋',' 🚞',' 🚝',' 🚄 ','🚅 ','🚈',' 🚂 ','🚆',' 🚇 ','🚊',' 🚉',' ✈️',' 🛫',' 🛬',' 🛩',' 💺',' 🛰',' 🚀',' 🛸',' 🚁',' 🛶',' ⛵️',' 🚤',' 🛥',' 🛳',' ⛴ ','🚢',' ⚓️',' 🛟',' 🪝',' ⛽️',' 🚧',' 🚦 ','🚥',' 🚏']
    var i = 0
    var total = emoji.length - 1;
    var loc = document.getElementById('transportEmojis')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)
 
        var btn = document.createElement("button");
        var id = 'transport' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
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
    var loc = document.getElementById('LocationsEmojis')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)
  
        var btn = document.createElement("button");
        var id = 'locations' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
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
    var loc = document.getElementById('symbolsEmojis')
    while (i <= total) {
        //console.log("ID: " + i + " Emoji" + emoji[i] + " Total: " + emoji.length)
  
        var btn = document.createElement("button");
        var id = 'symbols' + i;
        btn.id = id;
        btn.className= "emoji-btn"
        btn.value = emoji[i];
        loc.appendChild(btn);    
        document.getElementById(id).innerHTML = `<a onclick="copyemoji('${emoji[i]}')"> ${emoji[i]}</a>`;
        i++
    }
}
