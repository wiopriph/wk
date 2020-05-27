let scroll = 0
let counter = 0

/**
 * декремент
 */
function decrement () {
    counter--
    if (counter < 0) {
        counter = 0
    }
}

export default function (disabled) {
    if (disabled) {
        if (counter === 0) {
            scroll = document.scrollingElement.scrollTop
            document.documentElement.style.top = -scroll + 'px'
            document.documentElement.style.left = 0
            document.documentElement.style.right = 0
            document.documentElement.style.position = 'fixed'
            document.documentElement.style.overflow = 'hidden'
        }
        counter++
    } else {
        if (counter === 1) {
            document.documentElement.style.position = null
            document.documentElement.style.top = null
            document.documentElement.style.left = null
            document.documentElement.style.right = null
            document.documentElement.style.overflow = null
            document.scrollingElement.scrollTop = scroll
            setTimeout(() => {
                document.scrollingElement.scrollTop = scroll
            }, 30)
        }
        decrement()
    }
}
