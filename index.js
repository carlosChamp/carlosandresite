const NODETYPE_TEXT = 3;
const helloWorldSpan = document.querySelector("#hello-world > span");
const helloWorldText = Array.from(helloWorldSpan.childNodes);
const LETTER_DELAY_MS = 130;
const NEWLINE_DELAY_MS = 500;
let initDelay = 2000;

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`)
console.log(isReduced)


function digitar(element, textToAppend) {
    if (textToAppend.nodeType != NODETYPE_TEXT)
        return () => element.append(textToAppend);

    let index = 0;
    let arrText = textToAppend.textContent.split('');
    let tamanho = arrText.length;
    const internalPrint = () => {
        element.append(arrText[index]);
        index++;
        if (index < tamanho)
            setTimeout(internalPrint, LETTER_DELAY_MS);
    };
    return internalPrint;
}

if (!isReduced.matches) {
    helloWorldSpan.innerHTML = '';

    for (let i = 0; i < helloWorldText.length; i++) {
        const item = helloWorldText[i];
        console.log(item)
        console.log(initDelay)
        fnPrint = digitar(helloWorldSpan, item);

        setTimeout(fnPrint, initDelay);

        if (item.nodeType == NODETYPE_TEXT) {
            initDelay += item.textContent.length * LETTER_DELAY_MS + 500;
        }
        else
            initDelay += NEWLINE_DELAY_MS;

        console.log(initDelay)

    }
}