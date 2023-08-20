const orderForm = document.querySelector('#orderForm');
const sendButton = document.querySelector('#sendButton');
const modal =  document.querySelector('#modal');
const closeButton = document.querySelector('#closeButton');

sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm(orderForm)) {
        const data = {
            name: orderForm.elements.name.value,
            phone: orderForm.elements.phone.value,
            comment: orderForm.elements.comment.value,
            to: orderForm.elements.to.value
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        
        xhr.addEventListener('load', () => {
            if (xhr.response.status = 1) {
                if(getComputedStyle(document.querySelector(".modal")).visibility === 'hidden') {
                    modal.style.visibility = 'visible';
                }
            }
        });

        xhr.addEventListener('error' , (err) => {
            console.log('Ошибка сервера');
            modal.style.visibility = 'visible';
            modal.querySelector('.modal__text').textContent = 'Что-то не так!';
        })
    }
});

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
            valid = false;
        }
        if (!validateField(form.elements.phone)) {
            valid = false;
        }
        if (!validateField(form.elements.street)) {
            valid = false;
        }
        if (!validateField(form.elements.home)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {
        if (!field.checkValidity()) {
            field.nextElementSibling.textContent = field.validationMessage;

            return false;
        } else {
            field.nextElementSibling.textContent = '';

            return true;
        }
    }

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();

        if(getComputedStyle(document.querySelector(".modal")).visibility === 'visible') {
            modal.style.visibility = 'hidden';
        }
});