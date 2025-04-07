import { computed } from 'vue'
import { capitalize } from '@/utils/stringUtils.js'

export function useUserFormatter(user) {
    const fullName = computed(() => {
        return `${capitalize(user.ime)} ${capitalize(user.prezime)}`
    })

    return fullName
}