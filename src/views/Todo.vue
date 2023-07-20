<script setup>
    import TodoCard from '../components/TodoCard.vue';
</script>

<template>
    <div class="mt-2"> 
        <h1 class="font-bold  text-left m-2 p-2 font-bg-gray-300"> Halaman Todo List</h1>
    </div>
    <div class="w-full m-2 p-2">
        <button class="px-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-400 text-white font-bold">
            Tombol Tambah
        </button>
    </div>
    <div class="bg-gray-200 mt-2 py-2 px-2">
       <TodoCard />
    </div>
</template>