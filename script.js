function setItem(type) {
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;
    if (key && value) {
        if (type === 'cookie') {
            document.cookie = `${key}=${value}; path=/;`;
        } else if (type === 'session') {
            sessionStorage.setItem(key, value);
        } else if (type === 'local') {
            localStorage.(key, value);
        }setItem
        alert(`${type} storage set!`);
    } else {
        alert("Key and Value are required!");
    }
}

function getItem(type) {
    let key = document.getElementById('key').value;
    if (!key) {
        alert("Key is required!");
        return;
    }
    let value = null;
    if (type === 'cookie') {
        let cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            let [cookieKey, cookieValue] = cookie.split('=');
            if (cookieKey === key) value = cookieValue;
        }
    } else if (type === 'session') {
        value = sessionStorage.getItem(key);
    } else if (type === 'local') {
        value = localStorage.getItem(key);
    }
    alert(value !== null ? `Value: ${value}` : "Key not found!");
}

function removeItem(type) {
    let key = document.getElementById('key').value;
    if (!key) {
        alert("Key is required!");
        return;
    }
    if (type === 'cookie') {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } else if (type === 'session') {
        sessionStorage.removeItem(key);
    } else if (type === 'local') {
        localStorage.removeItem(key);
    }
    alert(`${type} storage removed!`);
}