function isValidateAccount(account) {
    var accountPattern = /^[_a-z0-9]{6,}$/;
    if (accountPattern.test(account)) {
        console.log(account + "tài khoản hợp lệ");
        return true;
    }else {
        console.log(account + "tài khoản không hợp lệ");
        return false;
    }
}

isValidateAccount("123abc_")
isValidateAccount("123456")
isValidateAccount("abcdef")
isValidateAccount("abc123")
isValidateAccount("________")
isValidateAccount("@")
isValidateAccount("12345")
isValidateAccount("1234_")
isValidateAccount("abcde")