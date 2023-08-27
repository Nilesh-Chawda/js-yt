const accountId = 144556
let accountEmail = "Nilesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//  accountId = 155667 // not allowed

/*
    Prefer not to use var
    Because of issue in block scope and function scope
*/

accountEmail = "nc@nc.com"
accountPassword="22223"
accountCity="Bhopal"
console.table([accountId,accountEmail,accountPassword])
