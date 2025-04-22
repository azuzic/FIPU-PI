import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const user = ref();

export default function useUser() {
    
    const router = useRouter();
    
    const username = computed(() => {
        if (!user.value?.name) return 'none';
        return user.value.name
    });

    const login = (userData) => {
        user.value = userData;
        router.push(`/users/${username.value}/list`)
    };

    const logout = () => {
        user.value = null;        
        router.push('/log-in')
    };

    return {
        user,
        username,
        login,
        logout,
    };
}