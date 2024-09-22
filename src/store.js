import {reactive} from 'vue'

const store = reactive({
    posts: [
        {
            id: 1,
            title: 'Как написать свой блог',
            description: 'Небольшой гайд как писать блог на языке Vue js с использованием tailwindcss',
            date: new Date()
        },
        // {
        //     id: 2,
        //     title: 'Tzaki Chess Club',
        //     description: 'О том как прошел турнир',
        //     date: new Date()
        // },{
        //     id: 3,
        //     title: 'Тут еще крутая статья',
        //     description: 'Очень крутая статья о том как сделать мир лучше',
        //     date: new Date()
        // }
        ]
})

export default store;