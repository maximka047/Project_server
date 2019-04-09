window.onload = function(){

    let btn = document.querySelector('.submit');

    function stop(event){
        event.preventDefault();
    }

    btn.addEventListener('click', stop, false);

    btn.addEventListener('click', function(){
      
        let form = document.querySelector('#modal_form');
        let overlay = document.querySelector('#overlay');
        form.style.display = 'block';
        overlay.style.display = 'block';
       
        let close = document.querySelector('#modal_close');
        close.addEventListener('click', function(){
            form.style.display = 'none';
            overlay.style.display = 'none';
        })
    })

    let btn_submit = document.querySelector('#modal_form input[type=submit]');
    btn_submit.addEventListener('click', stop, false);
    btn_submit.addEventListener('click', function(){
        let form = document.forms[1];
        let userName = document.forms[1].elements['userName'];
        let email = document.forms[1].elements['email'];
        let pay = document.forms[1].elements['pay'];
        let isConfirm = document.getElementById('confirm');
        
        let warning = document.querySelector('.warning-confirm');
        let warning_name = document.querySelector('.warning-name');
        let warning_email = document.querySelector('.warning-email');
        let warning_pay = document.querySelector('.warning-pay');
        let pay_on = document.querySelector('.on')
        let pay_off = document.querySelector('.off')
        if(!isConfirm.checked){
            warning.textContent = "Потрібно підтвердити замовлення!!!";   
        } else{
            warning.textContent = "";
        }

        if(userName.value.length < 2){
            userName.classList.add('is-invalid');
            warning_name.textContent = " Уважно заповніть ім'я користувача!"
        } else{
            warning_name.textContent = "";
        }

        if(email.value.length < 2 || !email.value.includes('@'&&'.')){
            email.classList.add('is-invalid');
            warning_email.textContent = " Уважно заповніть електронну пошту!"
        } else{
            warning_email.textContent = "";
        }

        if(pay_on.checked == false && pay_off.checked == false){
            warning_pay.textContent = "Виберіть спосіб оплати!!!";   
        } else{
            warning_pay.textContent = "";
        }

        for(let i = 0; i < form.length; i++){
            if(form[i].classList.contains('is-invalid')){
                form[i].classList.remove('is-invalid');
            } 
        }

        if(isConfirm.checked == true && userName.value.length >= 2 && email.value.includes('@'&&'.')){
            alert("Пробачте, але книги поки що немає в наявності");
            document.getElementById('modal_form').removeAttribute('style');
            overlay.style.display = 'none';
        }
        }
        
    )
}
