<template>
   <main>
      <IntroComp />
      <article class="project-title title">
         <h2>My Projects</h2>
         <p>Search by title or filter by category</p>
         <section>
            <input class="search-project" type="search" name="search" id="search" placeholder="Search Projects">
            <select>
               <option value="all">All Projects</option>
               <option value="website">Websites</option>
               <option value="blog">Blog</option>
            </select>
         </section>
      </article>
      <section class="card-group">
         <figure class="project-card">
            <img src="../assets/img/portfolio-books.jpg" alt="books">
            <figcaption>
               <h3>Book Recommendation with PHP</h3>
               <h4>Website</h4>
               <a href="https://pedroportfolio.netlify.app/" target="_blank">View Project</a>
            </figcaption>
         </figure> 
         <figure>
            <img src="" alt="">
            <figcaption>

            </figcaption>
         </figure>
         <figure>
            <img src="" alt="">
            <figcaption>

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
   }
}
</script>