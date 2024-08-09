function signin() {
    let usrnme = document.getElementById("usrnme")
    let passwrd = document.getElementById("passwrd")
    let mail = document.getElementById("mail")
    let usrErr = document.getElementById("usrerr")
    let passErr = document.getElementById("passerr")
    let mailErr = document.getElementById("mailerr")
    let userReg = /^[a-zA-Z0-9_-]{3,16}$/;
    let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // REGEX //
    let res1 = userReg.test(usrnme.value)
    let res2 = passReg.test(passwrd.value)
    let res3 = mailReg.test(mail.value)
    // let result = (res1, res2, res3);

    if (res1) {
        console.log(true);
        usrerr.style.visibility = "hidden"
    } else {
        console.log(false);
        usrerr.style.visibility = "visible"

    }

    if (res2) {
        console.log(true);
        passerr.style.visibility = "hidden"

    } else {
        console.log(false);
        passerr.style.visibility = "visible"

    }
    if (res3) {
        console.log(true);
        mailerr.style.visibility = "hidden"

    } else {
        console.log(false);
        mailerr.style.visibility = "visible"

    }


}