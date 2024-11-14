import "./ripple.css"

function updateRipple(el, binding, b) {
    const div = document.createElement("div")

    div.innerHTML =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="10" cy="10" r="10" />' +
        "</svg>"

    let removeing, leaveing
    let el_overflow

    div.classList.add("k-ripple")

    const resE = () => {
        div.remove()
        div.style.left = ""
        div.style.top = ""
        div.style.transform = ""
        div.style.opacity = ""
        el.style.overflow = el_overflow
    }
    const dfn = e => {
        let len = Math.round(
                Math.sqrt(Math.pow(el.offsetWidth, 2) + Math.pow(el.offsetHeight, 2))
            ),
            mr = Math.round(len / 10);
        resE()
        clearTimeout(removeing)
        el.appendChild(div)
        el_overflow = el.style.overflow
        el.style.overflow = "hidden"
        div.style.opacity = "var(--ripple-opacity,.1)"
        div.style.left = e.offsetX + "px"
        div.style.top = e.offsetY + "px"
        div.style.transform = `scale(${mr}) translate(-50%,-50%)`
    }
    const ufn = e => {
        clearTimeout(leaveing)
        leaveing = setTimeout(() => {
            div.style.opacity = ""
            removeing = setTimeout(() => {
                resE()
            }, 210)
        }, 210)
    }
    el.addEventListener("mousedown", dfn)
    el.addEventListener("mouseup", ufn)
    el.addEventListener("mouseleave", ufn)
}

function mounted(el, binding) {
    if (binding.value || binding.value === undefined)
        updateRipple(el, binding, false)
    else return
}

function removeListeners(el) {
    const div = el.querySelector(".k-ripple")
    div?.remove()
}

function unmounted(el) {
    removeListeners(el)
}

function isRippleEnabled(oldValue) {
    return false
}

function updated(el, binding) {
    if (binding.value === binding.oldValue) {
        return
    }

    const wasEnabled = isRippleEnabled(binding.oldValue)
    updateRipple(el, binding, wasEnabled)
}


export default {
    mounted,
    unmounted,
    inserted: mounted,
    unbind: unmounted
}
