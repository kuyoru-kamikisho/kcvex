/**
 * 将英文字符串的首字母变更为大写
 * @param str
 * @return {string}
 */
export function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 单位补充器
 * 默认补充单位为 px
 * @param {number|string} s
 * @param {string} u
 */
export function unitgen(s, u = 'px') {
    s = String(s)
    if (/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(s))
        return s + u
    else return s
}