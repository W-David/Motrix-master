import Icon from '@/components/Icons/Icon'

Icon.register({
  trash: {
    width: 24,
    height: 24,
    raw: `<polyline fill="none" stroke-miterlimit="10" points="20,9 20,23 4,23 4,9 " />
      <line fill="none" stroke-miterlimit="10" x1="1" y1="5" x2="23" y2="5" />
      <line fill="none" stroke-miterlimit="10" x1="12" y1="12" x2="12" y2="18" />
      <line fill="none" stroke-miterlimit="10" x1="8" y1="12" x2="8" y2="18" />
      <line fill="none" stroke-miterlimit="10" x1="16" y1="12" x2="16" y2="18" />
      <polyline fill="none" stroke-miterlimit="10" points="8,5 8,1 16,1 16,5 " />`,
    g: {
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2'
    }
  }
})
