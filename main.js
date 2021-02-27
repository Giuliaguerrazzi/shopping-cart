const app = new Vue({
    el: '#app',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Jeans',
                    description: 'jeans a vita alta, modello slavato',
                    img: 'jeans',
                    quantity: 0,
                },
                {
                    id: 2,
                    name: 'Gonna',
                    description: 'gonna a vita alta, modello svasato',
                    img: 'gonna',
                    quantity: 0,
                },
                {
                    id: 3,
                    name: 'Maglia',
                    description: 'maglia corta felpata',
                    img: 'maglia',
                    quantity: 0,
                },
                {
                    id: 4,
                    name: 'Camicia',
                    description: 'camicia bianca',
                    img: 'camicia',
                    quantity: 0,
                },
                {
                    id: 5,
                    name: 'Felpa',
                    description: 'felpa morbida',
                    img: 'felpa',
                    quantity: 0,
                },
                {
                    id: 6,
                    name: 'Pantaloni',
                    description: 'pantalone nero, taglio classico',
                    img: 'pantaloni',
                    quantity: 0,
                },
                {
                    id: 7,
                    name: 'Vestito a fiori',
                    description: 'vestito rosso con fantasia floreale',
                    img: 'vestito',
                    quantity: 0,
                },
                {
                    id: 8,
                    name: 'Vestito lungo',
                    description: 'vestito lungo blu con fantasia floreale',
                    img: 'vestito-lungo',
                    quantity: 0,
                },
            ],
            showCart: false
        }
    },
    computed: {
        cart() {
            return this.products.filter(product => product.quantity > 0);
        },
        totalQuantity() {
            return this.products.reduce (
                (total, product) => total + product.quantity,
                0
            );
        }
    },
    methods: {
        updateCart(product, updateType) {      
            for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].id === product.id) {
                if (updateType === 'subtract') {
                  if (this.products[i].quantity !== 0) {
                    this.products[i].quantity--;
                  }
                } else {
                  this.products[i].quantity++;
                }
                
                break;
              }
            }
          }
    }
});