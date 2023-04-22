const n = 10;
const primes = [];

for (var i = 2; i <= n; i++) {
    let prime = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
        }
    }
    if (prime) {
        primes.push(i);
    }
}
console.log(primes)
