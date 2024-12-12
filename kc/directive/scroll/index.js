/**
 * @param {HTMLElement|Element} dom 目标元素
 * @param {boolean} [dom.__scroll_isfirst] 递归函数逻辑状态标识符-判断是否第一次执行
 * @param {object} [dom.__scroll_binding_value] 实例指令值
 * @param {number} [dom.__scroll_prevx] 上一帧的目标距离x
 * @param {number} [dom.__scroll_prevy] 上一帧的目标距离y
 * @param {boolean} [dom.__scroll_reset] 是否应该重新读取偏移
 * @param {number} [dom.__scroll_requestanime] 实例帧动画标记
 *
 * @param {object} o 指令值
 * @param {boolean} [o.destroy=false] 销毁帧动画，一旦置为true，该该指令本身会立刻终止运行，不可通过设置为true重新运行，如果想重新运行，请更改元素的 key 属性值
 * @param {'x'|'y'} [o.direction='y'] 滚动方向
 * @param {number} [o.factor=1] 帧距离因子，代表每一帧移动的像素距离，该值越大，滚动速度越快，越小则越慢，注意该值的最大值和最小值受设备像素影响，过小时将会失效
 * @param {boolean} [o.infinite=true] 是否无限播放
 * @param {boolean} [o.pause=false] 是否暂停，注意不等同于禁用，只是外观上暂停，指令本身每一帧都依然在执行
 * @param {number} [o.redundancy=300] 冗余高度。只有当 “内容物总高度>(容器盒子高度+冗余高度)” 时才会发生滚动
 * @param {boolean} [o.reverse=false] 反转滚动方向
 *
 * @return {number}
 */
function scroller(dom, o) {
    if (o.destroy) {
        cancelAnimationFrame(dom.__scroll_requestanime)
        return 0
    }
    if (dom.__scroll_binding_value !== undefined) o = dom.__scroll_binding_value
    if (o.pause === undefined) o.pause = false
    if (o.infinite === undefined) o.infinite = true
    if (o.direction === undefined) o.direction = 'y'
    if (o.factor === undefined) o.factor = 1
    if (o.reverse === undefined) o.reverse = false
    if (o.redundancy === undefined) o.redundancy = 300

    let totalWidth = dom.scrollWidth,
        totalHeight = dom.scrollHeight,
        viewWidth = dom.clientWidth,
        viewHeight = dom.clientHeight,
        safeWidth = viewWidth + o.redundancy,
        safeHeight = viewHeight + o.redundancy,
        toEndWidth = totalWidth - viewWidth,
        toEndHeight = totalHeight - viewHeight

    if (dom.__scroll_reset) {
        dom.__scroll_prevx = dom.scrollLeft
        dom.__scroll_prevy = dom.scrollTop
        if (o.reverse && dom.__scroll_isfirst) {
            dom.__scroll_prevx = toEndWidth
            dom.__scroll_prevy = toEndHeight
        }
        dom.__scroll_reset = false
    }

    let factor = o.factor,
        nextToX = o.reverse ? dom.__scroll_prevx - factor : dom.__scroll_prevx + factor,
        nextToY = o.reverse ? dom.__scroll_prevy - factor : dom.__scroll_prevy + factor

    dom.__scroll_prevx = nextToX
    dom.__scroll_prevy = nextToY

    dom.__scroll_requestanime = requestAnimationFrame(() => {
        if (!o.reverse) {
            // 正向动画
            const b = o.direction === 'y'
                ? totalHeight > safeHeight && dom.__scroll_prevy < toEndHeight
                : totalWidth > safeWidth && dom.__scroll_prevx < toEndWidth
            if (b && !o.pause) {
                if (o.direction === 'y')
                    dom.scrollTo(0, nextToY)
                else
                    dom.scrollTo(nextToX, 0)
            } else {
                // 周期结束
                if (o.infinite && !o.pause) {
                    dom.scrollTo(0, 0)
                    dom.__scroll_reset = true
                }
            }
            dom.__scroll_isfirst = false
            scroller(dom, o)
        } else {
            // 反向动画
            const b = o.direction === 'y'
                ? totalHeight > safeHeight && dom.__scroll_prevy > 0
                : totalWidth > safeWidth && dom.__scroll_prevx > 0
            if (b) {
                if (!o.pause) {
                    if (o.direction === 'y')
                        dom.scrollTo(0, nextToY)
                    else
                        dom.scrollTo(nextToX, 0)
                }
                dom.__scroll_isfirst = false
                scroller(dom, o)
            } else {
                // 周期结束
                if (o.infinite) {
                    if (!o.pause)
                        dom.scrollTo(0, 0)
                    dom.__scroll_isfirst = true
                    dom.__scroll_reset = true
                    scroller(dom, o)
                }
            }
        }
    })
}

function mounted(el, binding, vnode) {
    const bvau = binding.value ?? {}
    el.__scroll_isfirst = true
    el.__scroll_reset = true
    scroller(el, bvau)
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            cancelAnimationFrame(el.__scroll_requestanime)
            el.__scroll_isfirst = true
            el.__scroll_reset = true
            scroller(el, bvau)
        }
    })

    resizeObserver.observe(el)
}

function updated(el, binding, vnode, prevVnode) {
    el.__scroll_binding_value = binding.value
    el.__scroll_reset = true
}

function beforeUnmount(el, binding, vnode) {
    cancelAnimationFrame(el.__scroll_requestanime)
}

export default {
    bind: mounted,
    update: updated,
    unbind: beforeUnmount,
    mounted: mounted,
    updated: updated,
    beforeUnmount: beforeUnmount
}