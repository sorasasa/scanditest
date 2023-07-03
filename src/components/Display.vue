<template>
    <div>
        <section>
            <router-link to="/add">
                <button id="add-btn">ADD</button>
            </router-link>
            <button id="delete-product-btn" @click="reloadPag">MASS DELETE</button>
        </section>
        <div class="container">
            <main>
                <div class="box" v-for="prd in products" :key="prd.id" >
                    <input type="checkbox" class="delete-checkbox" 
                     @click="massDelete(prd.id)"/>
                    <span class="info">
                        <h6>{{ prd.Sku }}</h6>
                        <p>{{ prd.Name }}</p>
                        <p>${{ prd.Price }}</p>
                        <p v-if="prd.Size">{{ prd.Size }}mb</p>
                        <p v-if="prd.Weight">{{ prd.Weight }}kg</p>
                        <p v-if="prd.Height && prd.Width && prd.Length">{{ prd.Height }}cm x {{ prd.Width }}cm x {{ prd.Length }}cm</p>
                    </span>
                </div><!--box-->
            </main>
        </div><!--container-->
    </div>
</template>

<script>
export default {
    name: "Display",
    data(){
        return{
            products: null,
            products_id: null,
        }
    },
    methods:{
        async getProducts(){
            const req = await fetch("https://products-api-topaz.vercel.app/products");

            const data = await req.json(); /** await for the req and transform into json */

            this.products = data;/**the data that came from db.json are changing the null value in products */

            console.log(this.products);

        },
        async massDelete(id) {
            const req = await fetch(`https://products-api-topaz.vercel.app/products/${id}`,{
            method: "DELETE"
            });
            const res = await req.json();
        },
        reloadPag(){
            window.location.reload();
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style scoped>
.container{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
}

main {
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    column-gap: 50px;
    row-gap: 50px;
    margin: auto;
    align-items: center;
}
.box {
    border: #000 solid 2px;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    padding-top: 25px;
}
.info {
    padding-top: 60px;
    padding-right: 30px;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    margin: 0 auto;
}
.delete-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 0;
    margin-left: 10px;
    margin-right: 190px;
}
section {
    display: flex;
    margin-left: 1000px;
    margin-bottom: 0;
}
button {
    padding: 10px;
    margin: 5px;
    font-size: medium;
    font-weight: bold ;
    background-color: rgb(100, 100, 100);
    color:white;
    cursor: pointer;
    transition: .5s;
}
button:hover {
    background: red;
    color: whitesmoke;
}

</style>