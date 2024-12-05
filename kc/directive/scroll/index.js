/**
 * @param {HTMLElement|Element} dom 目标元素
 * @param {object} o 配置选项
 * @param {boolean} [o.auto=true] 是否自动执行动画，关闭此值等同于禁用
 * @param {'x'|'y'} [o.direction='y'] 滚动方向
 * @param {number} [o.factor=0.03] 帧距离因子，该值越大，滚动速度越快
 * @param {boolean} [o.infinite=true] 是否无限播放
 * @param {boolean} [o.reverse=false] 反转滚动方向
 * @param {'hover'|'click'} [o.stopwhen='hover'] 当点击或悬浮时暂停播放动画
 * @return {number}
 */
function scroller(dom, o) {
    const totalWidth = dom.scrollWidth
    const totalHeight = dom.scrollHeight
    const viewWidth = dom.clientWidth
    const viewHeight = dom.clientHeight
    const toBottomWidth = totalWidth - viewWidth
    const toBottomHeight = totalHeight - viewHeight

    const scrolledX = dom.scrollLeft
    const scrolledY = dom.scrollTop

    const factor = o.factor ?? 0.03;
    const nextToX = scrolledX + factor
    const nextToY = scrolledY + factor
    console.log(nextToY)

    return requestAnimationFrame(() => {
        if (totalHeight > viewHeight && scrolledY < toBottomHeight) {
            dom.scrollTo(0, nextToY + factor)
            scroller(dom, o)
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