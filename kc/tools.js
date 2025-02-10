/**
 * 将英文字符串的首字母变更为大写
 * @param str
 * @return {string}
 */
export function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
