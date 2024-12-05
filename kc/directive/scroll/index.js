/**
 * @param {HTMLElement|Element} dom 目标元素
 * @param {object} o 指令值
 * @param {boolean} [o.disabled=true] 是否禁用
 * @param {'x'|'y'} [o.direction='y'] 滚动方向
 * @param {number} [o.factor=1] 帧距离因子，代表每一帧移动的像素距离，该值越大，滚动速度越快，越小则越慢，注意该值的最大值和最小值受设备像素影响，过小时将会失效，推荐不小于0.8
 * @param {boolean} [o.infinite=true] 是否无限播放
 * @param {boolean} [o.reverse=false] 反转滚动方向
 * @param {'mouseenter'|'click'|string} [o.stopwhen='mouseenter'] 当点击或悬浮时暂停播放动画，可以设置任意能被监听到的Event事件名称
 * @param {boolean} [m1=true] 递归函数逻辑状态标识符-判断是否第一次执行
 * @return {number}
 */
function scroller(dom, o, m1 = true) {
    if (o.disabled) return 0
    if (o.infinite === undefined) o.infinite = true
    if (o.direction === undefined) o.direction = 'y'
    if (o.factor === undefined) o.factor = 1
    if (o.reverse === undefined) o.reverse = false
    if (o.stopwhen === undefined) o.stopwhen = 'mouseenter'

    let totalWidth = dom.scrollWidth,
        totalHeight = dom.scrollHeight,
        viewWidth = dom.clientWidth,
        viewHeight = dom.clientHeight,
        toEndWidth = totalWidth - viewWidth,
        toEndHeight = totalHeight - viewHeight,
        scrolledX = dom.scrollLeft,
        scrolledY = dom.scrollTop

    if (o.reverse && m1) {
        scrolledX = toEndWidth
        scrolledY = toEndHeight
    }

    let factor = o.factor,
        nextToX = o.reverse ? scrolledX - factor : scrolledX + factor,
        nextToY = o.reverse ? scrolledY - factor : scrolledY + factor

    if (!o.reverse) {
        // 正向动画
        return requestAnimationFrame(() => {
            if (totalHeight > viewHeight && scrolledY < toEndHeight) {
                dom.scrollTo(0, nextToY)
            } else {
                // 周期结束
                if (o.infinite) {
                    dom.scrollTo(0, 0)
                }
            }
            scroller(dom, o)
        })
    } else {
        // 反向动画
        return requestAnimationFrame(() => {
            if (totalHeight > viewHeight && scrolledY > 0) {
                dom.scrollTo(0, nextToY)
                scroller(dom, o, false)
            } else {
                // 周期结束
                if (o.infinite) {
                    dom.scrollTo(0, 0)
                    scroller(dom, o, true)
                }
            }
        })
    }
}

function created(el, binding, vnode) {
}

function mounted(el, binding, vnode) {
    const bvau = binding.value ?? {}
    let animeId = scroller(el, bvau)
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            cancelAnimationFrame(animeId)
            animeId = scroller(el, bvau)
        }
    })

    resizeObserver.observe(el)
}

function beforeUpdate(el, binding, vnode, prevVnode) {
}

function updated(el, binding, vnode, prevVnode) {
    // scroller(el)
}

function beforeUnmount(el, binding, vnode) {
}

function unmounted(el, binding, vnode) {

}

export default {
    mounted,
    updated,
    unmounted
}