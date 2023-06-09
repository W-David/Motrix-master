import Icon from '@/components/Icons/Icon'

Icon.register({
  'arrow-down': {
    width: 24,
    height: 24,
    raw: `<g class="nc-icon-wrapper" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor">
      <line data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"/>
      <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="19,15 12,22 5,15 "/>
    </g>`,
    g: {
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2'
    }
  }
})
