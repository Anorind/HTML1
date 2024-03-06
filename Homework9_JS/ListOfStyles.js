function applyStyles(styles, text) {
    let styleString = '';
    for (let i = 0; i < styles.length; i++) {
        styleString += `${styles[i].name}: ${styles[i].value}; `;
    }
    document.write(`<p style="${styleString}">${text}</p>`);
}