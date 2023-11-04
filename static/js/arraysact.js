// 2

const styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

for (let style of styles) {
    if (style === "Blues") {
        styles[styles.indexOf(style)] = "Classic"
    }
}
styles.shift()
styles.unshift("Rap", "Reggae");

// 4



function sum() {
    
    let numbers = []
    
    while (true) {

        let num = +prompt("Informe um número. Se não for, o programa será encerrado", 0)

        if (num === "" || num === null || !isFinite(num)) {
            break
        } else {
            numbers.push(+num)
        }
    }
        let accumulator = 0
        for (let number of numbers) {
            accumulator += number
        }
        return accumulator
    }


alert(sum())