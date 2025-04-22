import { ref, computed } from 'vue';

const user = ref({ name: 'Markom', email: 'mmarkic@gmail.com' });
const registration = ref(false);

export default function useUser() {
    
    const userInitials = computed(() => {
        if (!user.value?.name) return '';
        return user.value.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    });

    const login = (userData) => {
        user.value = userData;
    };

    const logout = () => {
        user.value = null;
    };

    const setRegistration = (value) => {        
        registration.value = value;
    };

    return {
        user,
        userInitials,
        registration,
        login,
        logout,
        setRegistration
    };
}