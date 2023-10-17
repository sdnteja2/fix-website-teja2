import { computed, Ref } from 'vue';
interface Blok {
  svg: string;
}
export const useSvg = (blok: Ref<Blok>) => {
  const svgClass = computed(() => {
    return blok.value.svg === 'svgkanan' ? 'svgkiri' : 'svgkanan';
  });
  return {
    svgClass,
  };
};
