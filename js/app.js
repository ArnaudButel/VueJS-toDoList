var ComponentList = {
    props : ['elem'],
    template: `
        <div class="item ui grid equal width row">
            <input type="checkbox" :id="'produit_' + elem.id" v-model="elem.checked">
            <label :for="'produit_' + elem.id">{{ elem.text }}</label>
            <div class="ui right labeled input" v-if="elem.checked">
                <input class="ui mini icon input" type="text" placeholder="Montant" :id="'price_' + elem.id" v-model.number="elem.price" @change="upgradeAmountComp()">
                <label for="amount" class="ui label">€</label>
            </div>
            <button class="ui red button"  @click="delElmtComp(elem.id)">Supprimer</button>
        </div>`,
    methods: {
        delElmtComp(index) {
            this.$parent.delElmt(index)
        },
        upgradeAmountComp() {
            this.$parent.upgradeAmount()
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
        budget : 0,
        amount:0,
        list: [
            {id: 0, text:"Tomate", checked: false, price:0},
            {id: 1, text:"Pomme", checked: false, price:0},
            {id: 2, text:"Eau", checked: false, price:0}
        ]
    },
    methods: {
        delElmt(id) {
            this.list.forEach((elmt, index) => {
                if(elmt.id === id) {
                    Vue.delete(this.list, index);
                }
            });
        },
        upgradeAmount() {
            this.amount = 0
            this.list.forEach((elmt, index) => {
                this.amount += elmt.price
            });
        }
    },
    computed: {
        itemName: {
            get() {},
            set(value) {
                this.list.push({id: this.counterID, text: value, checked: false, value:0})
                this.counterID++
            }
        }
    }
})