// Get Text Area 
// Get Bold Button
// get Italic Button
// Get Underline Buuton 

// get Left Button
// get Center Button 
// get Right Button 
// get Justify Button 

// Get font-size Input 
// Get TexTransform Button 
// Get Color Input 



const textArea = document.getElementById('text-area');
const boldButton = document.getElementById('bold-button');
const italicButton = document.getElementById('italic-button')
const underlineButton = document.getElementById('underline-button')

const leftButton = document.getElementById('left-button')
const centerButton = document.getElementById('center-button')
const rightButton = document.getElementById('right-button')
const justifyButton = document.getElementById('justify-button')

const fontSizeInput = document.getElementById('fontsize')
const textTransformButton = document.getElementById('texttransform')
const colorInput = document.getElementById('colorinput')


// addEventListener On the bold Button 
// button toggle initialization
let isBold = false;
let isItalic = false;
let isUnderline = false;
let isTextTransform = false;
let isActive = false;

function toggleActive(button, isActive) {
    if (isActive) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}


boldButton.addEventListener('click', () => {
    isBold = !isBold
    textArea.style.fontWeight = isBold ? 'bold' : 'normal';
    toggleActive(boldButton, isBold)
});
italicButton.addEventListener('click', () => {
    isItalic = !isItalic
    textArea.style.fontStyle = isItalic ? 'italic' : 'normal'
    toggleActive(italicButton, isItalic)
})
underlineButton.addEventListener('click', () => {
    isUnderline = !isUnderline
    textArea.style.textDecoration = isUnderline ? 'underline' : 'none'
    toggleActive(underlineButton, isUnderline)
})



let alignment = 'left';

leftButton.addEventListener('click', () => {
    alignment = 'left'
    textArea.style.textAlign = alignment;
    toggleActive(leftButton, true);
    toggleActive(centerButton, false);
    toggleActive(rightButton, false);
    toggleActive(justifyButton, false);
})
centerButton.addEventListener('click', () => {
    alignment = 'center'
    textArea.style.textAlign = alignment
    toggleActive(leftButton, false);
    toggleActive(centerButton, true);
    toggleActive(rightButton, false);
    toggleActive(justifyButton, false);
})
rightButton.addEventListener('click', () => {
    alignment = 'right'
    textArea.style.textAlign = alignment
    toggleActive(leftButton, false);
    toggleActive(centerButton, false);
    toggleActive(rightButton, true);
    toggleActive(justifyButton, false);
})
justifyButton.addEventListener('click', () => {
    alignment = 'justify'
    textArea.style.textAlign = alignment;
    toggleActive(leftButton, false);
    toggleActive(centerButton, false);
    toggleActive(rightButton, false);
    toggleActive(justifyButton, true);
})


fontSizeInput.addEventListener('change', () => {
    const fontSize = fontSizeInput.value;
    textArea.style.fontSize = fontSize + 'px'
})

textTransformButton.addEventListener('click', () => {
    isTextTransform = !isTextTransform
    textArea.style.textTransform = isTextTransform ? 'uppercase' : 'lowercase';
})

colorInput.addEventListener('')