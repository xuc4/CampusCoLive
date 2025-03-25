/**
 * email
 * @param email
 * @returns {boolean}
 */
function emailReg(email) {
    let emailReg = /^[\da-z]+([\-\.\_]?[\da-z]+)*@[\da-z]+([\-\.]?[\da-z]+)*(\.[a-z]{2,})+$/;
    return emailReg.test(email);
}

/**
 * phone number
 * @param phone
 * @returns {boolean}
 */
function phoneReg(phone) {
    let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    return phoneReg.test(phone);
}

/**
 * username
 * @param name
 * @returns {boolean}
 */
function userNameReg(name) {
    let userNameReg = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z]){1,10}$/;
    return userNameReg.test(name);
}

/**
 * password
 * @param password
 * @returns {boolean}
 */
function userPasswordReg(password) {
    let userPasswordReg = /^(\w){8,16}$/;
    return userPasswordReg.test(password);
}



