interface Blok {
  svg: 'svgkanan' | 'svgkiri' | 'svgatas' | 'svgbawah' | 'svgtengah';
}
export const useSvg = (blok: Ref<Blok>) => {
  const svgClass = computed(() => {
    switch (blok.value.svg) {
      case 'svgkanan':
        return 'svgkiri';
      case 'svgkiri':
        return 'svgkanan';
      case 'svgatas':
        return 'svgatas';
      case 'svgbawah':
        return 'svgbawah';
      case 'svgtengah':
        return 'svgtengah';
      default:
        return '';
    }
  });
  return {
    svgClass,
  };
};
