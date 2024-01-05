const figure = document.getElementById('figure').innerHTML;
const button = document.getElementById('button');
const word = document.getElementById('word');
console.log(figure)

const numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
};

console.log(Math.floor(figure/1000));
console.log(figure%1000);

function convertNumberToWords(figure){
    if(figure in numbersToWords){
        //console.log(numbersToWords[figure]);
        word.innerHTML = numbersToWords[figure];
        return  numbersToWords[figure];
    }
    else{
        if(figure >20 && figure <= 99){
            let words = "";
            words = words + convertNumberToWords(Math.floor(figure/10)*10);
            console.log(words);
            words =  words + " " + convertNumberToWords(figure%10);
            console.log(words);
            word.innerHTML =words;
            return words;
    
        }else{
            if(figure >99 && figure <=999){
                let words = "";
                words = words + convertNumberToWords(Math.floor(figure/100))+ " hundred and";
                console.log(words);
                words =  words + " " + convertNumberToWords(figure%100);
                console.log(words);
                word.innerHTML =words;
                return words;
            }
            else{
                if(figure >999 && figure <=9999){
                    let words = "";
                    words = words + convertNumberToWords(Math.floor(figure/1000))+ " thousand and";
                    console.log(words);
                    words =  words + " " + convertNumberToWords(figure%1000);
                    console.log(words);
                    word.innerHTML =words;
                    return words;
                }
                else{
                    if(figure >9999 && figure <=99999){
                        let words = "";
                        words = words + convertNumberToWords(Math.floor(figure/1000))+ " thousand";
                        console.log(words);
                        words =  words + " " + convertNumberToWords(figure%1000);
                        console.log(words);
                        word.innerHTML =words;
                        return words;
                    }
                }
            }
        }
    }
    
    
    
    
}

convertNumberToWords(figure);