<template>
    <div>
        <form id="product_form" name="formMain" @submit="createProduct" >
            <section>
                <button type="submit" value="submit">Save</button>
                <router-link to="/">
                <button type="reset" formnovalidate>CANCEL</button>
                </router-link>
            </section>
            <div class="form-group">
                <label for="sku">SKU*: </label>
                <input type="text" name="sku" id="sku" minlength="4" maxlength="10" placeholder="#sku" v-model="sku" required/>
                <!--p v-if="error">{{ error }}</p-->
            </div>
            <div class="form-group">
                <label for="name">Name*: </label>
                <input type="text" name="Name" id="name" minlength="4" maxlength="11" placeholder="#name" v-model="Name" required/>
            </div>
            <div class="form-group">
                <label for="price">Price($)*: </label>
                <input type="number" name="price" id="price" placeholder="#price" v-model="Price" required/>
            </div>
            
            <div class="form-group">
                <label for="type">Type switcher: </label>
                <select id="productType" v-model="prdType">
                    <option value="" disabled>Select type</option>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                </select>
            </div>
           
            <div id="DVD" v-if="prdType === 'dvd'">
                <div class="form-control">
                    <label for="size">Size (mb)* </label>
                    <input type="number" id="size" v-model="Size" placeholder="size(MB)" :required="isRequired"> 
                    <p class = "product_description">Please, provide size.</p>
                </div>
            </div>
    
            <div id="Book" v-if="prdType === 'book'">
                <div class="form-control">
                    <label for="weight">Weight (kg)* </label>
                    <input type="number" id="weight" name="Weight" v-model="Weight" placeholder="weight(kg)" :required="isRequired"/>
                    <p class = "product_description">Please, provide weight.</p>
                </div>
            </div>
    
            <div id="Furniture" v-if="prdType === 'furniture'">
                <div class="form-control">
                    <label for="height">Height (cm)* </label>
                    <input type="number"  id="height" name="Height" placeholder="height(cm)" v-model="Height" :required="isRequired"/>
                    <br>
                    <label for="width">Width (cm)* </label>
                    <input type="number"  id="width" name="Width" placeholder="width(cm)" v-model="Width" :required="isRequired"/>
                    <br>
                    <label for="length">Length (cm)* </label>
                    <input type="number" id="length" name="Length"  placeholder="length(cm)" v-model="Length" :required="isRequired"/>
                    <br/>
                    <p class="product_description">Please, provide dimensions.</p>
                </div>
            </div>
            <div class="required_fields">*required fields</div>
        </form>
    </div>
</template>
    
<script>
    export default {
        name:"ProductForm",
        data() {
          return {
            sku: null,
            Name: null,
            Price : null,
            Size: null,
            Weight: null,
            Height: null,
            Width: null,
            Length: null,
            prdType: null,
            isRequired: true,
            //error:"" //  
          }
        },
        methods: {
          async createProduct(e){
             e.preventDefault();
             const data = {
                Sku: this.sku,
                Name: this.Name,
                Price: this.Price,
                prdtype: this.prdType,
                Size: this.Size,
                Weight: this.Weight,
                Height: this.Height,
                Width: this.Width,
                Length: this.Length
             }
             /**will turn the data into string for the server */
             const dataJson = JSON.stringify(data); 
             /**requiring */
             const req = await fetch("https://products-api-topaz.vercel.app/products", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: dataJson,
             });
             const res = await req.json(); /**show the response */
             
             //clean the fields
             this.Sku ="";
             this.Name ="";
             this.Price ="";
             this.prdType ="";
             this.Size ="";
             this.Weight ="";
             this.Height ="";
             this.Width ="";
             this.Length ="";
            
             this.$router.push('/');
          },
        },
    }
</script>
    
<style scoped>
    section {
        display: flex;
        margin-left: 250px;
        margin-bottom: 15px;
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
        background: red ;
        color: whitesmoke;
    }
    .required_fields {
        color: red;
    }
    .product_description {
        color: green;
        margin-top: 5px;
    }
    input, select {
        padding: 8px 9px; 
        width: 100px;
    }
    label {
        font-weight: bold;
    }
    #product_form {
        margin: 0 auto;
        max-width: 450px;  
    }
    .form-control,
    .form-group {
        margin: 20px;
    }
    .form-control {
        border: 1px solid #414040;
        padding: 15px;
    }
    .form-control input {
        margin: 10px;
    }
</style>