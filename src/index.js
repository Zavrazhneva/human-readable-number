module.exports = function toReadable(number) {
    const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function dozensString(number) {
        number = +number
        if (number < 20) {
            return numberArr[number];
        } else if (number >= 20 && number % 10 === 0) {
            return dozens[number / 10 - 2];
        } else {
            let srtNumber = number.toString()
            return `${dozens[srtNumber[0] - 2]} ${numberArr[srtNumber[1]]}`
        }
    }
    function hundredsString(number) {
        let srtNumber = number.toString();
        let dozensNumber = dozensString(srtNumber.slice(1, 3));
        if (number % 100 === 0) {
            return `${numberArr[srtNumber[0]]} hundred`
        }
        return `${numberArr[srtNumber[0]]} hundred ${dozensNumber}`
    }

    function resultString(number) {
        if (number < 100) {
            return dozensString(number);
        }
        return hundredsString(number)
    }
    return resultString(number)
}
