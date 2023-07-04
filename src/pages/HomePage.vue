<template>
<!-- #527A7A -->
   <main>
      <IntroComp />
      <figure class="code-img">
         <img src="../assets/img/bg-code.jpg" alt="">
      </figure>
      <article class="project-title title">
         <h2>My Projects</h2>
         <p>Search by title or filter by category</p>
         <section>
            <input @input="getProductsList" v-model="userInput" class="search-project" type="search" name="search" id="search" placeholder="Search Projects">
            <select v-model="selectedCategory" @change="getProductsList">
               <option value="all">All Projects</option>
               <option value="Web Application">Web Application</option>
               <option value="Demo">Demo</option>
               <option value="Animation">Animation</option>
            </select>
         </section>
      </article>
      <section class="card-group">
         <figure class="project-card" v-for="product in productsResult" :key="product.title">
            <img :src="product.img" :alt="product.title">
            <figcaption>
               <h3>{{ product.title }}</h3>
               <h4>{{ product.category }}</h4>
               <aside>
                  <a :href="product.link" target="_blank">View Project</a> |
                  <a :href="product.srcCode" target="_blank">Source Code</a>
               </aside>
            </figcaption>
         </figure>
      </section>
   </main>
</template>

<script>
import IntroComp from '@/components/IntroComp.vue'

export default {
   name: 'ProjectsComp',
   components: {
      IntroComp
   },
   data() {
      return {
         products: [
            {
               title: 'Readvice Book Recommendation',
               category: 'Web Application',
               img: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600',
               link: 'https://pedroportfolio.netlify.app/',
               srcCode: 'https://github.com/DYagmur/ReadVice'
            },
            {
               title: 'Employee Management System',
               category: 'Demo',
               img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
               link: 'https://pedroportfolio.netlify.app/',
               srcCode: 'https://github.com/pssgarcia/employee_table_vue'
            },
            {
               title: 'Movie Search Gallery',
               category: 'Web Application',
               img: 'https://media.istockphoto.com/id/893853364/photo/blank-movie-clapper-3d-isolated-illustration.jpg?s=612x612&w=0&k=20&c=wdfd4Vq2jnwm8VIythFfBsjoW0ga8Es0vBaHT8js67E=',
               link: 'https://pedroportfolio.netlify.app/',
               srcCode: 'https://github.com/pssgarcia/movie_land'
            },
            {
               title: 'Products Invoice System',
               category: 'Demo',
               img: 'https://media.istockphoto.com/id/1299861504/photo/pasta-on-supermarket-shelves.jpg?s=612x612&w=0&k=20&c=3aER91Bn8Dq58ALnkJm5OJ1rktOlFJUN-FrMosrd9qg=',
               link: 'https://pedroportfolio.netlify.app/',
               srcCode: 'https://github.com/pssgarcia/invoice_system_js'
            },
            {
               title: 'Mario Cart Animations',
               category: 'Animation',
               img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaTw1BjQJtTZ32fU-Jfic37XImS9Kzs32og&usqp=CAU',
               link: 'https://pedroportfolio.netlify.app/',
               srcCode: 'https://github.com/pssgarcia/mario_kart_animations'
            }
         ],
         userInput: '',
         productsResult: [],
         selectedCategory: 'all'
      }
   },
   created() {
      this.getProductsList();
   },
   methods: {
       getProductsList() {
         this.productsResult = this.products.filter(product => {
            const titleMatch = product.title.toLowerCase().includes(this.userInput.toLowerCase());
            const categoryMatch = this.selectedCategory === 'all' || product.category === this.selectedCategory;
            return titleMatch && categoryMatch;
         });
      }
   }
}
</script>