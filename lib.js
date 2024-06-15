function encode(text) {
    return window.btoa(text);    
}

function decode(text) {
    return window.atob(text);    
}

function mask(text, type) {
    if (type == 'text') {
        return `https://itsyebekhe.github.io/urlmskr/?t=${encode(text)}`;
    } else {
        return `https://itsyebekhe.github.io/urlmskr/${encode(text)}`;
    }
}

const urlmskr = {
    encode,
    decode,
    mask
}
