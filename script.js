const form = document.getElementById('form');
const numInput = document.getElementById('number');
const result = document.getElementById('output');

const romanNumerals = ["I" ,"V","X", "L", "C", "D", "M"];

const numberToRomanDecimal = (num) => {
    let roman = '';
    let i = 0;
    if(num > 3999){
        return "Please enter a number less than or equal to 3999";
    }else if(num < 0){
        return "Please enter a number greater than or equal to 1";
    }else if(!num){
       return "Please enter a valid number";
    }else{
        while(num > 0){
            let digit = num % 10;
            if(digit === 9){
                roman = romanNumerals[i] + romanNumerals[i+2] + roman;
            } else if(digit === 4){
                roman = romanNumerals[i] + romanNumerals[i+1] + roman;
            } else {
                let temp = '';
                if(digit >= 5){
                    temp = romanNumerals[i+1];
                    digit -= 5;
                }
                for(let j = 0; j < digit; j++){
                    temp += romanNumerals[i];
                }
                roman = temp + roman;
            }
            num = Math.floor(num / 10);
            i += 2;
        }
    }
    console.log(roman);
    return roman;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(numInput.value);
    result.innerHTML = numberToRomanDecimal(num);
    result.classList.remove('hidden');
});

numInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.key === "Enter"){
        const num = parseInt(numInput.value);
        result.innerHTML = numberToRomanDecimal(num);
        result.classList.remove('hidden');
    }
});