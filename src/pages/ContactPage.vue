<template>
   <article id="contact" class="title">
      <h2>
         Contact details
      </h2>
      <ul>
         <li class="icon-detail">
            <address>
               <i class="fa-solid fa-location-dot contact-icon"></i>
               Vancouver, BC, Canada
            </address> 
         </li>
         <li class="icon-detail">
            <a href="mailto:pedrossgarcia88@gmail.com">
               <i class="fa-regular fa-envelope contact-icon"></i>
               pedrossgarcia88@gmail.com
            </a>
         </li>
         <li class="icon-detail">
            <a href="tel:+55 (37) 99993-1492">
               <i class="fa-solid fa-phone contact-icon"></i>
               +55 (37) 99993-1492
            </a>
         </li>
      </ul>
      <form class="contact-form title">
         <h3>Talk to me</h3>
         <label for="name">
            Full Name
            <input type="text" name="name" id="name" placeholder="Full Name">
         </label>
         <label for="email">
            Email
            <input type="email" name="email" id="email" placeholder="Email">
         </label>
         <label for="subject">
            Subject
            <input type="text" name="subject" id="subject" placeholder="Subject">
         </label>
         <label for="message">
            Message
            <textarea name="message" id="message" placeholder="Message">
            </textarea>
         </label>
         <aside class="submit-button">
            <input type="submit" value="Send">
         </aside>
      </form>
   </article>
</template>

<script>
export default {
   name: 'ContactPage'
}
</script>