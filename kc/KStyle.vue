<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KStyle"
}
</script>

<style>
/** ---------------------------------------------------------------------------------*
 ** 字体
 ** ---------------------------------------------------------------------------------*/
.text-white {
  color: white;
}

.text-black {
  color: black;
}

.text-nowrap {
  white-space: nowrap;
}

.text-break {
  white-space: break-spaces;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.text-w600 {
  font-weight: 600;
}

.text-w500 {
  font-weight: 500;
}

.text-w400 {
  font-weight: 400;
}

.text-14 {
  font-size: 14px;
}

.text-16 {
  font-size: 16px;
}

.text-18 {
  font-size: 18px;
}

.text-20 {
  font-size: 20px;
}

.text-22 {
  font-size: 22px;
}

.text-28 {
  font-size: 28px;
}

/** ---------------------------------------------------------------------------------*
 ** 通用一般样式
 ** ---------------------------------------------------------------------------------*/
.c-pointer {
  cursor: pointer;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.d-flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.position-absolute {
  position: absolute;
}

.position-relative {
  position: relative;
}

.translate-left-n50 {
  transform: translate(-50%, 0);
}

.k-locale-ltr {
  direction: ltr;
}

.k-locale-rtl {
  direction: rtl;
}

.d-flex {
  display: flex;
}

.d-grid {
  display: grid;
}

.d-contents {
  display: contents;
}

.d-inline-grid {
  display: inline-grid;
}

.d-block {
  display: block;
}

.d-inline-block {
  display: inline-block;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.ma-0 {
  margin: 0;
}

.mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.pa-0 {
  padding: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.ma-1 {
  margin: 4px;
}

.mx-1 {
  margin-left: 4px;
  margin-right: 4px;
}

.my-1 {
  margin-top: 4px;
  margin-bottom: 4px;
}

.mt-1 {
  margin-top: 4px;
}

.mr-1 {
  margin-right: 4px;
}

.mb-1 {
  margin-bottom: 4px;
}

.ml-1 {
  margin-left: 4px;
}

.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}

.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.pa-1 {
  padding: 4px;
}

.pt-1 {
  padding-top: 4px;
}

.pr-1 {
  padding-right: 4px;
}

.pb-1 {
  padding-bottom: 4px;
}

.pl-1 {
  padding-left: 4px;
}

.ma-2 {
  margin: 8px;
}

.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}

.my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}

.mr-2 {
  margin-right: 8px;
}

.mb-2 {
  margin-bottom: 8px;
}

.ml-2 {
  margin-left: 8px;
}

.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.pa-2 {
  padding: 8px;
}

.pt-2 {
  padding-top: 8px;
}

.pr-2 {
  padding-right: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pl-2 {
  padding-left: 8px;
}

.ma-3 {
  margin: 12px;
}

.mx-3 {
  margin-left: 12px;
  margin-right: 12px;
}

.my-3 {
  margin-top: 12px;
  margin-bottom: 12px;
}

.mt-3 {
  margin-top: 12px;
}

.mr-3 {
  margin-right: 12px;
}

.mb-3 {
  margin-bottom: 12px;
}

.ml-3 {
  margin-left: 12px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}

.pa-3 {
  padding: 12px;
}

.pt-3 {
  padding-top: 12px;
}

.pr-3 {
  padding-right: 12px;
}

.pb-3 {
  padding-bottom: 12px;
}

.pl-3 {
  padding-left: 12px;
}

.ma-4 {
  margin: 16px;
}

.mx-4 {
  margin-left: 16px;
  margin-right: 16px;
}

.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 16px;
}

.mr-4 {
  margin-right: 16px;
}

.mb-4 {
  margin-bottom: 16px;
}

.ml-4 {
  margin-left: 16px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}

.pa-4 {
  padding: 16px;
}

.pt-4 {
  padding-top: 16px;
}

.pr-4 {
  padding-right: 16px;
}

.pb-4 {
  padding-bottom: 16px;
}

.pl-4 {
  padding-left: 16px;
}

.ma-5 {
  margin: 20px;
}

.mx-5 {
  margin-left: 20px;
  margin-right: 20px;
}

.my-5 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.mt-5 {
  margin-top: 20px;
}

.mr-5 {
  margin-right: 20px;
}

.mb-5 {
  margin-bottom: 20px;
}

.ml-5 {
  margin-left: 20px;
}

.px-5 {
  padding-left: 20px;
  padding-right: 20px;
}

.py-5 {
  padding-top: 20px;
  padding-bottom: 20px;
}

.pa-5 {
  padding: 20px;
}

.pt-5 {
  padding-top: 20px;
}

.pr-5 {
  padding-right: 20px;
}

.pb-5 {
  padding-bottom: 20px;
}

.pl-5 {
  padding-left: 20px;
}

.ma-6 {
  margin: 24px;
}

.mx-6 {
  margin-left: 24px;
  margin-right: 24px;
}

.my-6 {
  margin-top: 24px;
  margin-bottom: 24px;
}

.mt-6 {
  margin-top: 24px;
}

.mr-6 {
  margin-right: 24px;
}

.mb-6 {
  margin-bottom: 24px;
}

.ml-6 {
  margin-left: 24px;
}

.px-6 {
  padding-left: 24px;
  padding-right: 24px;
}

.py-6 {
  padding-top: 24px;
  padding-bottom: 24px;
}

.pa-6 {
  padding: 24px;
}

.pt-6 {
  padding-top: 24px;
}

.pr-6 {
  padding-right: 24px;
}

.pb-6 {
  padding-bottom: 24px;
}

.pl-6 {
  padding-left: 24px;
}

.ma-7 {
  margin: 28px;
}

.mx-7 {
  margin-left: 28px;
  margin-right: 28px;
}

.my-7 {
  margin-top: 28px;
  margin-bottom: 28px;
}

.mt-7 {
  margin-top: 28px;
}

.mr-7 {
  margin-right: 28px;
}

.mb-7 {
  margin-bottom: 28px;
}

.ml-7 {
  margin-left: 28px;
}

.px-7 {
  padding-left: 28px;
  padding-right: 28px;
}

.py-7 {
  padding-top: 28px;
  padding-bottom: 28px;
}

.pa-7 {
  padding: 28px;
}

.pt-7 {
  padding-top: 28px;
}

.pr-7 {
  padding-right: 28px;
}

.pb-7 {
  padding-bottom: 28px;
}

.pl-7 {
  padding-left: 28px;
}

.ma-8 {
  margin: 32px;
}

.mx-8 {
  margin-left: 32px;
  margin-right: 32px;
}

.my-8 {
  margin-top: 32px;
  margin-bottom: 32px;
}

.mt-8 {
  margin-top: 32px;
}

.mr-8 {
  margin-right: 32px;
}

.mb-8 {
  margin-bottom: 32px;
}

.ml-8 {
  margin-left: 32px;
}

.px-8 {
  padding-left: 32px;
  padding-right: 32px;
}

.py-8 {
  padding-top: 32px;
  padding-bottom: 32px;
}

.pa-8 {
  padding: 32px;
}

.pt-8 {
  padding-top: 32px;
}

.pr-8 {
  padding-right: 32px;
}

.pb-8 {
  padding-bottom: 32px;
}

.pl-8 {
  padding-left: 32px;
}

.ma-9 {
  margin: 36px;
}

.mx-9 {
  margin-left: 36px;
  margin-right: 36px;
}

.my-9 {
  margin-top: 36px;
  margin-bottom: 36px;
}

.mt-9 {
  margin-top: 36px;
}

.mr-9 {
  margin-right: 36px;
}

.mb-9 {
  margin-bottom: 36px;
}

.ml-9 {
  margin-left: 36px;
}

.px-9 {
  padding-left: 36px;
  padding-right: 36px;
}

.py-9 {
  padding-top: 36px;
  padding-bottom: 36px;
}

.pa-9 {
  padding: 36px;
}

.pt-9 {
  padding-top: 36px;
}

.pr-9 {
  padding-right: 36px;
}

.pb-9 {
  padding-bottom: 36px;
}

.pl-9 {
  padding-left: 36px;
}

.ma-10 {
  margin: 40px;
}

.mx-10 {
  margin-left: 40px;
  margin-right: 40px;
}

.my-10 {
  margin-top: 40px;
  margin-bottom: 40px;
}

.mt-10 {
  margin-top: 40px;
}

.mr-10 {
  margin-right: 40px;
}

.mb-10 {
  margin-bottom: 40px;
}

.ml-10 {
  margin-left: 40px;
}

.px-10 {
  padding-left: 40px;
  padding-right: 40px;
}

.py-10 {
  padding-top: 40px;
  padding-bottom: 40px;
}

.pa-10 {
  padding: 40px;
}

.pt-10 {
  padding-top: 40px;
}

.pr-10 {
  padding-right: 40px;
}

.pb-10 {
  padding-bottom: 40px;
}

.pl-10 {
  padding-left: 40px;
}

.ma-11 {
  margin: 44px;
}

.mx-11 {
  margin-left: 44px;
  margin-right: 44px;
}

.my-11 {
  margin-top: 44px;
  margin-bottom: 44px;
}

.mt-11 {
  margin-top: 44px;
}

.mr-11 {
  margin-right: 44px;
}

.mb-11 {
  margin-bottom: 44px;
}

.ml-11 {
  margin-left: 44px;
}

.px-11 {
  padding-left: 44px;
  padding-right: 44px;
}

.py-11 {
  padding-top: 44px;
  padding-bottom: 44px;
}

.pa-11 {
  padding: 44px;
}

.pt-11 {
  padding-top: 44px;
}

.pr-11 {
  padding-right: 44px;
}

.pb-11 {
  padding-bottom: 44px;
}

.pl-11 {
  padding-left: 44px;
}

.ma-12 {
  margin: 48px;
}

.mx-12 {
  margin-left: 48px;
  margin-right: 48px;
}

.my-12 {
  margin-top: 48px;
  margin-bottom: 48px;
}

.mt-12 {
  margin-top: 48px;
}

.mr-12 {
  margin-right: 48px;
}

.mb-12 {
  margin-bottom: 48px;
}

.ml-12 {
  margin-left: 48px;
}

.px-12 {
  padding-left: 48px;
  padding-right: 48px;
}

.py-12 {
  padding-top: 48px;
  padding-bottom: 48px;
}

.pa-12 {
  padding: 48px;
}

.pt-12 {
  padding-top: 48px;
}

.pr-12 {
  padding-right: 48px;
}

.pb-12 {
  padding-bottom: 48px;
}

.pl-12 {
  padding-left: 48px;
}

.ma-13 {
  margin: 52px;
}

.mx-13 {
  margin-left: 52px;
  margin-right: 52px;
}

.my-13 {
  margin-top: 52px;
  margin-bottom: 52px;
}

.mt-13 {
  margin-top: 52px;
}

.mr-13 {
  margin-right: 52px;
}

.mb-13 {
  margin-bottom: 52px;
}

.ml-13 {
  margin-left: 52px;
}

.px-13 {
  padding-left: 52px;
  padding-right: 52px;
}

.py-13 {
  padding-top: 52px;
  padding-bottom: 52px;
}

.pa-13 {
  padding: 52px;
}

.pt-13 {
  padding-top: 52px;
}

.pr-13 {
  padding-right: 52px;
}

.pb-13 {
  padding-bottom: 52px;
}

.pl-13 {
  padding-left: 52px;
}

.ma-14 {
  margin: 56px;
}

.mx-14 {
  margin-left: 56px;
  margin-right: 56px;
}

.my-14 {
  margin-top: 56px;
  margin-bottom: 56px;
}

.mt-14 {
  margin-top: 56px;
}

.mr-14 {
  margin-right: 56px;
}

.mb-14 {
  margin-bottom: 56px;
}

.ml-14 {
  margin-left: 56px;
}

.px-14 {
  padding-left: 56px;
  padding-right: 56px;
}

.py-14 {
  padding-top: 56px;
  padding-bottom: 56px;
}

.pa-14 {
  padding: 56px;
}

.pt-14 {
  padding-top: 56px;
}

.pr-14 {
  padding-right: 56px;
}

.pb-14 {
  padding-bottom: 56px;
}

.pl-14 {
  padding-left: 56px;
}

.ma-15 {
  margin: 60px;
}

.mx-15 {
  margin-left: 60px;
  margin-right: 60px;
}

.my-15 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.mt-15 {
  margin-top: 60px;
}

.mr-15 {
  margin-right: 60px;
}

.mb-15 {
  margin-bottom: 60px;
}

.ml-15 {
  margin-left: 60px;
}

.px-15 {
  padding-left: 60px;
  padding-right: 60px;
}

.py-15 {
  padding-top: 60px;
  padding-bottom: 60px;
}

.pa-15 {
  padding: 60px;
}

.pt-15 {
  padding-top: 60px;
}

.pr-15 {
  padding-right: 60px;
}

.pb-15 {
  padding-bottom: 60px;
}

.pl-15 {
  padding-left: 60px;
}

.ma-16 {
  margin: 64px;
}

.mx-16 {
  margin-left: 64px;
  margin-right: 64px;
}

.my-16 {
  margin-top: 64px;
  margin-bottom: 64px;
}

.mt-16 {
  margin-top: 64px;
}

.mr-16 {
  margin-right: 64px;
}

.mb-16 {
  margin-bottom: 64px;
}

.ml-16 {
  margin-left: 64px;
}

.px-16 {
  padding-left: 64px;
  padding-right: 64px;
}

.py-16 {
  padding-top: 64px;
  padding-bottom: 64px;
}

.pa-16 {
  padding: 64px;
}

.pt-16 {
  padding-top: 64px;
}

.pr-16 {
  padding-right: 64px;
}

.pb-16 {
  padding-bottom: 64px;
}

.pl-16 {
  padding-left: 64px;
}

.selectable {
  user-select: auto;
}

.inselectable {
  user-select: none;
}

.justify-sb {
  justify-content: space-between;
}

.justify-ed {
  justify-content: end;
}

.justify-st {
  justify-content: start;
}

.justify-ct {
  justify-content: center;
}

.justify-rt {
  justify-content: right;
}

.justify-ar {
  justify-content: space-around;
}

.justify-ev {
  justify-content: space-evenly;
}

.align-ct {
  align-items: center;
}

.align-ed {
  align-items: end;
}

.align-st {
  align-items: start;
}

.flex-grow-1 {
  flex-grow: 1;
}

.round-16 {
  border-radius: 16px;
}

.round-14 {
  border-radius: 14px;
}

.round-12 {
  border-radius: 12px;
}

.round-10 {
  border-radius: 10px;
}

.round-8 {
  border-radius: 8px;
}

.round-6 {
  border-radius: 6px;
}

.round-4 {
  border-radius: 4px;
}

.round-2 {
  border-radius: 2px;
}

/**----------------------------------------------------------------------------------------
 *  渐变过渡
 * ----------------------------------------------------------------------------------------*/
.kfade-enter-active, .kfade-leave-active {
  transition: opacity .2s;
}

.kfade-enter, .kfade-leave-to,
.kfade-enter-from {
  opacity: 0;
}

/**----------------------------------------------------------------------------------------
 *  海拔
 * ----------------------------------------------------------------------------------------*/
.elevation-0 {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, .2), 0 0 0 0 rgba(0, 0, 0, .14), 0 0 0 0 rgba(0, 0, 0, .12);
}

.elevation-1 {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
}

.elevation-2 {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.elevation-3 {
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
}

.elevation-4 {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
}

.elevation-5 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
}

.elevation-6 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
}

.elevation-7 {
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12);
}

.elevation-8 {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
}

.elevation-9 {
  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, .2), 0 9px 12px 1px rgba(0, 0, 0, .14), 0 3px 16px 2px rgba(0, 0, 0, .12);
}

.elevation-10 {
  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, .2), 0 10px 14px 1px rgba(0, 0, 0, .14), 0 4px 18px 3px rgba(0, 0, 0, .12);
}

.elevation-11 {
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, .2), 0 11px 15px 1px rgba(0, 0, 0, .14), 0 4px 20px 3px rgba(0, 0, 0, .12);
}

.elevation-12 {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12);
}

.elevation-13 {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 13px 19px 2px rgba(0, 0, 0, .14), 0 5px 24px 4px rgba(0, 0, 0, .12);
}

.elevation-14 {
  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, .2), 0 14px 21px 2px rgba(0, 0, 0, .14), 0 5px 26px 4px rgba(0, 0, 0, .12);
}

.elevation-15 {
  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, .2), 0 15px 22px 2px rgba(0, 0, 0, .14), 0 6px 28px 5px rgba(0, 0, 0, .12);
}

.elevation-16 {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
}

.elevation-17 {
  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, .2), 0 17px 26px 2px rgba(0, 0, 0, .14), 0 6px 32px 5px rgba(0, 0, 0, .12);
}

.elevation-18 {
  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, .2), 0 18px 28px 2px rgba(0, 0, 0, .14), 0 7px 34px 6px rgba(0, 0, 0, .12);
}

.elevation-19 {
  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, .2), 0 19px 29px 2px rgba(0, 0, 0, .14), 0 7px 36px 6px rgba(0, 0, 0, .12);
}

.elevation-20 {
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, .2), 0 20px 31px 3px rgba(0, 0, 0, .14), 0 8px 38px 7px rgba(0, 0, 0, .12);
}

.elevation-21 {
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, .2), 0 21px 33px 3px rgba(0, 0, 0, .14), 0 8px 40px 7px rgba(0, 0, 0, .12);
}

.elevation-22 {
  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12);
}

.elevation-23 {
  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, .2), 0 23px 36px 3px rgba(0, 0, 0, .14), 0 9px 44px 8px rgba(0, 0, 0, .12);
}

.elevation-24 {
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
}

/**----------------------------------------------------------------------------------------
 *  背景虚化与变暗 透明效果
 * ----------------------------------------------------------------------------------------*/

.opacity-0 {
  opacity: 0;
}
</style>
