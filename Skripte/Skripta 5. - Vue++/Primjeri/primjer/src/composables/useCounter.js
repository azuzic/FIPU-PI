import { ref } from 'vue'

const count = ref(0)

export function useCounter() {
    const increment = () => count.value++;
    return { count, increment }
}