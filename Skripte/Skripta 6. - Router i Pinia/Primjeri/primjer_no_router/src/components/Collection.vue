<script setup>
    import { ref } from 'vue';
    import Vinyl from '@/components/Vinyl.vue';
    import AlbumCover from '@/components/AlbumCover.vue';
    import Auth from '@/components/Auth.vue';

    const albums = ref([
        { 
            title: 'Thriller', 
            artist: 'Michael Jackson', 
            year: 1982,
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png'
        },
        { 
            title: 'The Dark Side of the Moon', 
            artist: 'Pink Floyd', 
            year: 1973,
            cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png'
        },
        { 
            title: 'Rumours', 
            artist: 'Fleetwood Mac', 
            year: 1977,
            cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG'
        },
    ]);

    const newAlbum = ref({
        title: '',
        artist: '',
        year: '',
        cover: ''
    });

    const addAlbum = () => {
        albums.value.unshift({ ...newAlbum.value });
        newAlbum.value = { title: '', artist: '', year: '', cover: '' };
    };
</script>

<template>   
        
    <div class="flex w-full items-center justify-between mb-8">
        <h1 class="p-2 w-fit text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
            Vinylist
        </h1>

        <Auth/>
    </div>

    <!-- Add New Album Form -->
    <div class="bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl p-6 mb-8 backdrop-blur-sm sticky top-0 z-10000">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="newAlbum.title" placeholder="Naslov albuma..." 
                class="p-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
        <input v-model="newAlbum.artist" placeholder="Izvođač..." 
                class="p-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
        <input v-model="newAlbum.year" placeholder="Godina..." type="number" 
                class="p-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
        <input v-model="newAlbum.cover" placeholder="URL slike albuma..." 
                class="p-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
        </div>
        <button @click="addAlbum" class="mt-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg transition-all shadow-lg cursor-pointer
            hover:brightness-125 hover:scale-102">
            Dodaj Album
        </button>
    </div>
    
    <!-- Albums Grid -->
    <TransitionGroup v-if="albums.length > 0" name="list" tag="div" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative">
        <div v-for="(album, i) in albums" :key="album.title" class="group hover:-translate-y-2 transition-transform duration-300"
            :style="`z-index: ${albums.length-i};`">
            
            <div class="relative cursor-pointer">
                <Vinyl/>                        
                <AlbumCover :album="album" @remove="albums.splice(i, 1)"/>
            </div>
                
            <div class="p-4 bg-gray-800 bg-opacity-80 rounded-b-lg">
                <h3 class="font-bold truncate">{{ album.title }}</h3>
                <p class="text-sm text-gray-300 truncate">{{ album.artist }}</p>
                <p class="text-xs text-purple-300 mt-1">{{ album.year }}</p>
            </div>
        </div>
    </TransitionGroup>            
    <div v-else class="text-center py-12 text-gray-400">
        <p class="text-xl">Your collection is empty</p>
        <p class="mt-2">Add your first album to get started</p>
    </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.list-leave-active {
    position: absolute;
}
</style>