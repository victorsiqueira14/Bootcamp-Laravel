import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default await (async () => {
const __VLS_setup = async () => {
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
return {};
}
});
function __VLS_template() {
// @ts-ignore
[AuthenticatedLayout, Head];
return {};
}
return {} as typeof __VLS_Component;
};
return await __VLS_setup();
})();
