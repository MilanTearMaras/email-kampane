<template>
  <button class="inline-flex items-center rounded-[0.313rem]" :class="[buttonStyles, disabled ? '' : 'hover:shadow-[0px_0px_30px_0px_#333C4E26]']">
    <slot name="prepend"></slot>
    {{ btnText }}
    <slot name="append"></slot>
  </button>
</template>

<script setup lang="ts">
type Size = 'sm' | 'md' | 'lg'
type Style = 'filled' | 'outlined' | 'dashed' | 'text'

const props = defineProps({
  btnText: {
    default: '',
    type: String
  },
  btnSize: {
    default: 'md',
    type: String as PropType<Size>,
  },
  btnStyle: {
    default: '',
    type: String as PropType<Style>
  },
  btnColor: {
    default: '',
    type: String
  },
  disabled: {
    default: false,
    type: Boolean
  }
})

const buttonSize = computed(() => {
  switch (props.btnSize) {
    case 'sm':
      return 'pt-3.5 pb-[0.813rem] px-[0.938rem] text-base'
    case 'md':
      return 'pt-3.5 pb-[0.813rem] px-5 text-lg leading-[1.125rem]'
    case 'lg':
      return 'px-5 py-10 text-xl'
    default:
      return 'pt-3.5 pb-[0.813rem] px-5 text-lg leading-[1.125rem]'
  }
})

const buttonStyle = computed(() => {
  switch (props.btnStyle) {
    case 'filled':
      return `border-solid border border-${props.btnColor} bg-${props.btnColor} text-white`
    case 'outlined':
      return `border-solid border border-${props.btnColor} text-${props.btnColor} bg-white`
    case 'dashed':
      return `border-dashed border border-${props.btnColor} text-${props.btnColor} bg-white`
    case 'text':
      return `border border-transparent bg-transparent text-${props.btnColor}`
    default:
      return `border-solid border border-${props.btnColor} bg-${props.btnColor} text-white`
  }
})

const buttonStyles = computed(() => {
  return props.disabled ? `${buttonSize.value} border border-solid border-disabled-grey bg-medium-grey text-dark-grey pointer-events-none` : `${buttonSize.value} ${buttonStyle.value}`
})
</script>

<style scoped>

</style>