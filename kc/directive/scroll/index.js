/**
 * @param {HTMLElement|Element} dom 目标元素
 * @param {object} o 指令值
 * @param {boolean} [o.pause=false] 是否暂停，注意不等同于禁用
 * @param {'x'|'y'} [o.direction='y'] 滚动方向
 * @param {number} [o.factor=1] 帧距离因子，代表每一帧移动的像素距离，该值越大，滚动速度越快，越小则越慢，注意该值的最大值和最小值受设备像素影响，过小时将会失效，推荐不小于0.8
 * @param {boolean} [o.infinite=true] 是否无限播放
 * @param {boolean} [o.reverse=false] 反转滚动方向
 * @param {'mouseenter'|'click'|string} [o.stopwhen='mouseenter'] 当点击或悬浮时暂停播放动画，可以设置任意能被监听到的Event事件名称
 * @param {boolean} [m1=true] 递归函数逻辑状态标识符-判断是否第一次执行
 * @return {number}
 */
function scroller(dom, o, m1 = true) {
    if (o.pause === undefined) o.pause = false
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

    return requestAnimationFrame(() => {
        if (!o.reverse) {
            // 正向动画
            const b = o.direction === 'y'
                ? totalHeight > viewHeight && scrolledY < toEndHeight
                : totalWidth > viewWidth && scrolledX < totalWidth
            if (b) {
                if (!o.pause) {
                    if (o.direction === 'y')
                        dom.scrollTo(0, nextToY)
                    else
                        dom.scrollTo(nextToX, 0)
                }
            } else {
                // 周期结束
                if (o.infinite) {
                    dom.scrollTo(0, 0)
                }
            }
            scroller(dom, o)
        } else {
            // 反向动画
            const b = o.direction === 'y'
                ? totalHeight > viewHeight && scrolledY > 0
                : totalWidth > viewWidth && scrolledX > 0
            if (b) {
                if (!o.pause) {
                    if (o.direction === 'y')
                        dom.scrollTo(0, nextToY)
                    else
                        dom.scrollTo(nextToX, 0)
                }
                scroller(dom, o, false)
            } else {
                // 周期结束
                if (o.infinite) {
                    dom.scrollTo(0, 0)
                    scroller(dom, o, true)
                }
            }
        }
    })
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