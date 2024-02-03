function styling(){
    let userInput = document.getElementById('userFont').value;
    let output = document.getElementById('heading');
    output.innerText = userInput;
    // array
    const fontStyles = [
        'Arial',
        'Times New Roman',
        'Courier New',
        'Georgia',
        'Verdana',
        'cursive'
    ];
    // Randomly selection a font style
    let randomIndex = Math.floor(Math.random() * fontStyles.length);
    let randomFontStyle = fontStyles[randomIndex];
    // Apply the randomly selected font style
            output.style.display = 'block';
            output.style.fontFamily = randomFontStyle;
}