var ComponentList = {
    props : ['elem'],
    template: `
        <li>
            <input type="checkbox">
            {{ elem.id + " " + elem.text }}
            <button @click="alert('1')">X</button>
        </li>`
}


var app = new Vue({
    el: '#app',
    components: {
        'list': ComponentList
    },
    data: {
        counterID : 4,
        list: [
            {id: 1, text: 'Liste 1'},
            {id: 2, text: 'Liste 2'},
            {id: 3, text: 'Liste 3'}
        ]
    },
    methods: {
        suppElmt(index) {
            console.log(index)
            // this.items.splice(index, 1);
            // Vue.delete(this.items, index);
        }
    },
    computed: {
        itemName: {
            get() {},
            set(value) {
                this.list.push({id: this.counterID, text: value})
                this.counterID++
            }
        }
    }
})