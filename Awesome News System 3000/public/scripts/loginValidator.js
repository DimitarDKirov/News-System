/*globals $ toastr CryptoJS*/
(function () {
    const UsernameRegex = /^[a-zA-Z0-9]{5,30}$/;
    const PasswordRegex = /^[^<>?$]{5,30}$/;
    const EmailRegex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/;

    $('#authenticate').submit(function (event) {
        let username = $('#username').val();
        if (!UsernameRegex.test(username)) {
            toastr.error('Username must contain between 5 and 30 letters or digits');
            event.preventDefault();
        }

        let password = $('#password').val();
        if (!PasswordRegex.test(password)) {
            toastr.error('Password must be between 5 and 30 symbols long and can not contain <, > or $');
            event.preventDefault();
        }

        let emailElement = $('#email');
        if (emailElement.length) {
            let email = emailElement.val();
            if (!EmailRegex.test(email)) {
                toastr.error('Invalid email');
                event.preventDefault();
            }
        }

        if (!event.isDefaultPrevented()) {
            $('#password').val(CryptoJS.SHA1(password));
        }
    })
})();