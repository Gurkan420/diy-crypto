const secretMessage = "ATTACKATSEVEN"

// secretMessage.charCodeAt()
//ÖVERSÄTT BOKSTÄVER TILL NUMMER 1.

const charCodes = []
for (let i = 0; i < secretMessage.length; i++) {
    // console.log(secretMessage[i])
    // console.log(secretMessage[i].charCodeAt(0))   
    // let CharCode = secretMessage[i].charCodeAt(0)
    // console.log(secretMessage [i, charCode, charCode + 1])
    charCodes.push(secretMessage[i].charCodeAt(0))
    
}

console.log(charCodes)

//2. SHIFTA NUMRET

for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1
    
}





//3. ÖVERSÄTT NUMMER TILL TILLBAKA TILL FRÅN CHARCODE TILL STrinG; NUMMER

let encryptedMessage = ""
for (let i = 0; i < charCodes.length; i++) {
    encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])
    
}

console.log(encryptedMessage)

//ÖVERSÄTT VARJE TECKEN TILL ETT NUMMER
//SCHIFTA NUMRET 
//ÖVERSÄTTA NUMRET TILL TECKEN