var ComponentList = {
    props : ['elem'],
    template: `
        <li>
            <input type="checkbox">
            {{ elem.id + " " + elem.text }}
            <button @click="suppElmtComp(elem.id)">X</button>
        </li>`,
    methods: {
        suppElmtComp(index) {
            this.$parent.suppElmt(index);
        }
    }
}


var app = new Vue({
    el: '#app',
    components: {
        'list': ComponentList
    },
    data: {
        counterID : 3,
        list: [
            {id: 0, text: 'Liste 1'},
            {id: 1, text: 'Liste 2'},
            {id: 2, text: 'Liste 3'}
        ]
    },
    methods: {
        suppElmt(id) {
            this.list.forEach((elmt, index) => {
                if(elmt.id === id) {
                    Vue.delete(this.list, index);
                }
            });
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