var ComponentList = {
    props : ['elem'],
    template: `
        <div class="item ui grid equal width row">
            <div class="elmt_list"><input type="checkbox" :id="'produit_' + elem.id" v-model="elem.checked"></div>
            <div class="elmt_list"><label :for="'produit_' + elem.id">{{ elem.text }}</label></div>
            <div class="ui right labeled input elmt_list">
                <input class="ui mini icon input" type="text" placeholder="Montant" :id="'price_' + elem.id" v-model.number="elem.price" @change="upgradeAmountComp()" v-if="elem.checked">
                <label for="amount" class="ui label" v-if="elem.checked">€</label>
            </div>
            <div class="elmt_list"><button class="ui red button"  @click="delElmtComp(elem.id)">Supprimer</button></div>
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
            this.upgradeAmount()
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