import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function useTodo() {
    const todos = ref([])
    const todo = ref([])
    const errors = ref({})

    axios.defaults.baseURL = "http://localhost:8000/api/"
    const getTodos = async () => {
        try {
            let response = await axios.get('/todos');

            todos.value = response.data.data;

            // console.log('try to fetch data todo from API');
        } catch(error) {
            if(error.response.data = 422) {
                errors. value = response.data.errors;
            }
        }
    }

    return {
        todo,
        todos, 
        getTodos,
        errors,
    }
}