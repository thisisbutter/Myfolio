<template>
    <div>
    <footer
     class="footer"
    > 
      <!-- <p class="contact_me">Contact from here &#9993</p> -->
      <p class="alllights">&copy; {{ new Date().getFullYear() }} ButtersLog</p>
    </footer>
        
    </div>
</template>

<style scoped>
.footer {
  /* background-color: #879e87; */
 /* background-color: rgb(49, 77, 73); */
 background-color: rgb(197, 216, 216);
 font-family: 'Lato', sans-serif; 
 color: rgb(51, 34, 16);
 min-height: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}
.footer p {
  display: block;
}
.alllights {
  font-size: 15px;
  margin-bottom: 0;
   /* margin-top: 20px; */
}
/* .contact_me {
 margin-top: 20px;
 margin-bottom: 5px;
 font-family: 'Lato', sans-serif;
 font-size: 15px;
} */

</style>