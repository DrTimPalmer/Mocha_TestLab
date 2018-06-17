function LetterChange(str) {

    let strArray = String(str).split("");

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = IncrementLetter(strArray[i]);
        strArray[i] = CapitaliseVowels(strArray[i]);
    }

    return strArray.join("");


    function IncrementLetter(char) {
        // Validation
        if (!char.match(/[a-zA-Z]/)) return char;
        // Special cases
        if (char === "z") return "a";
        if (char === "Z") return "A";

        // Execute
        let charCode = char.charCodeAt(0);
        charCode++;
        return String.fromCharCode(charCode);
    }

    function CapitaliseVowels(char) {
        switch (char) {
            case "a":
                return "A";
            case "e":
                return "E";
            case "i":
                return "I";
            case "o":
                return "O";
            case "u":
                return "U";
            default:
                return char;
        }
    }
}

