<script setup>
    import useTodo from '../composables/todo';
    import { onMounted } from 'vue';

    const { todo, todos, getTodos, errors } = useTodo();

    onMounted( ()=> getTodos() )

    console.log(todos);
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr> 
                    <th scope="col" class="px-6 py-3">
                       No
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Judul
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Kegiatan
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Creator
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
               <tr
                  :key="todo.id"
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  v-for="(todo, index) in todos"
                >
                    <td class="px-6 py-4">
                       {{ index + 1 }}
                    </td>
                    <td class="px-6 py-4">
                       {{ todo.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ todo.description }}
                    </td>
                    <td class="px-6 py-4">
                        {{todo.user.name}}
                    </td>
                    <td class="px-6 py-4 flex w-full space-x-2">
                        <router-link 
                            to="#" 
                            class="font-medium px-2 py-2 bg-gray-600 text-white hover:bg-gray-400 font-bold rounded-lg">
                            Edit
                        </router-link>

                        <button 
                            class="px-2 py-2 rounded-lg bg-red-600 text-white font-medium  font-bold hover:bg-red-400"> 
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>