window.onload = function() {
    let colors = document.getElementById('colors');
    let colorData = localStorage.getItem('colors');
    let colorList = colorData ? JSON.parse(colorData) : {};

    for (let colorName in colorList) {
        let colorCode = colorList[colorName];
        let colorValue;
    
        if (colorCode.includes(',')) {
            let rgbValues = colorCode.split(',');
            colorValue = rgbValues.length === 3 ? `rgb(${colorCode})` : `rgba(${colorCode})`;
        } else {
            colorValue = colorCode;
        }
    
        let div = document.createElement('div');
        div.style.backgroundColor = colorValue;
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.margin = '10px';
        div.style.border = '1px solid black';
        div.textContent = colorName + ': ' + colorCode;
        colors.appendChild(div);
    }    
};

document.getElementById('colorForm').onsubmit = function(e) {
    e.preventDefault();

    let colorName = document.getElementById('colorName').value;
    let colorType = document.getElementById('colorType').value;
    let colorCode = document.getElementById('colorCode').value;

    if (!colorName.match(/^[a-zA-Z]+$/)) {
        alert('Назва кольору повинна містити тільки літери');
        return;
    }

    if (colorType === 'RGB' && !colorCode.match(/^(\d{1,3},){2}\d{1,3}$/)) {
        alert('Код RGB повинен містити 3 числа від 0 до 255, розділені комами');
        return;
    }

    if (colorType === 'RGBA' && !colorCode.match(/^(\d{1,3},){3}(0(\.\d+)?|1)$/)) {
        alert('Код RGBA повинен містити 4 числа: перші 3 від 0 до 255, розділені комами, і останнє від 0 до 1');
        return;
    }

    if (colorType === 'HEX' && !colorCode.match(/^#[0-9A-F]{6}$/i)) {
        alert('Код HEX повинен починатися з символу # та містити 6 цифр або літер від A до F');
        return;
    }

    let div = document.createElement('div');
    div.style.backgroundColor = colorType === 'RGB' ? `rgb(${colorCode})` : colorCode;
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '10px';
    div.style.border = '1px solid black';
    div.textContent = colorName + ': ' + colorCode;
    colors.appendChild(div);

    let colorData = localStorage.getItem('colors');
    let colorList = colorData ? JSON.parse(colorData) : {};
    colorList[colorName] = colorCode;
    localStorage.setItem('colors', JSON.stringify(colorList));
};