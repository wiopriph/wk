export default function numerate (srt, count = 0) {
  let result = ''
  let variants = srt.split(':::')
  let first = variants[ 0 ] || ''
  let second = variants[ 1 ] || ''
  let third = variants[ 2 ] || second
  let empty = variants[ 3 ] || third

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
