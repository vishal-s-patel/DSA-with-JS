let n = -12;
result = 0;

while (n) {
    let rem = n % 10;
    result = (result * 10) + rem;
    n = n / 10 | 0;
}

console.log(result);