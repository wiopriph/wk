/**
 * склонение существительных в зависимости от числа
 * @param srt - существительное в формате день:::дня:::дней
 * @param count - число
 * @returns {*} - {String}
 */
export default function numerate (srt, count = 0) {
    const variants = srt.split(':::')
    const first = variants[0] || ''
    const second = variants[1] || ''
    const third = variants[2] || second
    const empty = variants[3] || third
    let result = ''

    count = Math.abs(count)

    if (count.toString().indexOf('.') > -1) {
        result = second
    } else if (!count) {
        result = empty
    } else if (count % 10 === 1 && count % 100 !== 11) {
        result = first
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        result = second
    } else {
        result = third
    }

    return result
}

