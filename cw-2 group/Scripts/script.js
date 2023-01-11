var webstore = new Vue({
    el: '#app',
    data: {
        showProduct: true,
        sitename: 'CST3145',
        searchTerm: '',
        sortStyle: '',
        products: products,
    },

    computed: {
        searchField() {

            return this.products.filter(product => {
                return (product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    product.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    product.price.toString().includes(this.searchTerm.toLowerCase()) ||
                    product.spaces.toString().includes(this.searchTerm.toLowerCase()))
            })
        }
    }
});
