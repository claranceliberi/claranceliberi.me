<script lang="ts" setup>
import type { CompanyColors } from '~/types';

  type Props = {
    color?: CompanyColors
    ping?: boolean
  }

  const props: Props = withDefaults(defineProps<Props>(), {
    color: 'GREY',
    ping: false
  })

  const colorClass = computed(() => {
    switch (props.color) {
      case 'BLUE':
        return 'bg-sky-400'
      case 'GREEN':
        return 'bg-emerald-400'
      case 'GREY':
      default:
        return 'bg-gray-400'
    }
  })

  const borderColorClass = computed(() => {
    switch (props.color) {
      case 'BLUE':
        return 'border-3 border-sky-200 '
      case 'GREEN':
        return 'border-3 border-emerald-200 '
      case 'GREY':
      default:
        return 'border-3 border-gray-200 '
    }
  })

</script>

<template>
    <span class="relative flex items-center" :class="{'h-4 w-4': !props.ping, 'h-2 w-2': props.ping}">
        <span
            v-if="props.ping"
            class="absolute inline-flex h-full w-full rounded-full  opacity-75"
            :class="{'animate-ping': props.ping, [colorClass]:true}"
        ></span>
        <span
            class="relative inline-flex box-content rounded-full h-2 w-2 "
            :class="{[colorClass]:true, [borderColorClass]:!props.ping}"
        ></span>


    </span>
</template>
