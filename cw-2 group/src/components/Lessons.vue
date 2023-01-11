<template>
    <main>
        <div v-for="product in products" :key="product.id">
            <p>topic: {{ product.name }}</p>
            <p>Location: {{ product.location }}</p>
            <p>Price: £{{ product.price }}</p>

        </div>
    </main>
</template>
<script>
export default {
    name: "ProductList",
    data() {
        return {
            products =[
                {
                    name: "Maths",
                    location: "London",
                    price: 50,
                },
                {
                    name: "English",
                    location: "Brimingham",
                    price: 40,
                },
                {
                    name: "Physics",
                    location: "York",
                    price: 45,
                },
                {
                    name: "Chemistry",
                    location: "Cambridge",
                    price: 50,
                },
                {
                    name: "Medicine",
                    location: "Oxford",
                    price: 45,
                },
                {
                    name: "Geography",
                    location: "Northampton",
                    price: 50,
                },
                {
                    name: "Statistics",
                    location: "Brent Cross",
                    price: 50,
                },
                {
                    name: "IT",
                    location: "Hendon",
                    price: 40,
                },
                {
                    name: "History",
                    location: "Milton Keynes",
                    price: 40,
                },
                {
                    name: "Biology",
                    location: "Hereford",
                    price: 45,
                }
            ]
        }
    },

}
</script>
