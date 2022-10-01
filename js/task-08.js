const formRef = document.querySelector('.login-form')


formRef.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();

    const formsElements = event.currentTarget.elements;
    const email = formsElements.email.value;
    const password = formsElements.password.value;
    const data = {
        email,
        password,
    }

  if (email === "" || password === "") {
        return alert("Всі поля повинні бути заповнені!");
     }

    console.log(data);

    event.currentTarget.reset()
}



// const formData = new FormData(event.currentTarget)

//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });
//     console.log(data);