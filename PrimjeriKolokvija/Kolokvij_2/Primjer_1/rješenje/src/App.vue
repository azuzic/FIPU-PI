<template>
    <div>
        <div>
            <RouterLink to="/gallery">User</RouterLink>
            |
            <RouterLink to="/admin">Admin</RouterLink>
        </div>
        <RouterView/>
    </div>
</template>
<style scoped>
a.router-link-active {
    color: green;
    font-weight: bold;
}
</style>