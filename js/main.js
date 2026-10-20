const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            nr: 0,
            list: ['item1', 'item2', 'item3'],
            Ertilstede: true,
            størrelse: ['Little', 'Medium', 'Large']
        }
    },
    methods: {
        myMethod(){

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
