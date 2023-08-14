<script lang="ts" setup>
 import Navbar from '@/components/Navbar.vue' 
 import router from '@/router';

  function goToPlayQuiz(){
    router.push('/playQuizPage')
  }


</script>
<template>
   <body>
        <div class="category__wrapper">
         <Navbar/> 
            <section class="category__content">
              <div class="container">
                    <h1>Categorie</h1>
                    <p id="sub__title">Choisissez une catégorie de quiz pour vous challenger</p>

                    <div class="row" >
                        <div class="category-col">
                            <h3>Informatique</h3>
                            <p>Intelligence Artificielle et Apprentissage Automatique : Testez vos compétences en IA et en ML en répondant à des questions sur les réseaux neuronaux, les algorithmes de clustering, la prédiction de données et les applications de l'apprentissage automatique.Développement Web : Explorez les technologies web, des langages front-end tels que HTML, CSS et JavaScript, aux frameworks et bibliothèques modernes comme React, Angular et Vue.js.</p>
                            <button class="custom--btn--button" @click="goToPlayQuiz" > Jouer au quiz</button>
                        </div>
                        <div class="category-col">
                            <h3>Science</h3>
                            <p>Plongez dans le monde fascinant de la connaissance scientifique ! Mettez votre cerveau à l'épreuve avec des questions qui explorent les mystères de l'univers, de la biologie à la physique en passant par la chimie. Explorez les découvertes qui ont façonné notre compréhension du monde et découvrez des faits étonnants qui vous laisseront émerveillé. Développez votre esprit critique et laissez libre cours à votre curiosité dans notre catégorie Science.</p>
                            <button class="custom--btn--button" @click="goToPlayQuiz" > Jouer au quiz</button>
                        </div>
                        <div class="category-col">
                            <h3>Sport</h3>
                            <p>Êtes-vous prêt à montrer votre esprit sportif ? Notre catégorie de jeu "Sport" vous propose une expérience de quiz passionnante qui couvre tout le spectre du monde sportif. Des records inégalés aux moments historiques, vous serez plongé dans une compétition stimulante où chaque question vous rapproche du statut de champion des connaissances sportives. Que vous soyez un athlète en herbe ou un spectateur passionné, ce jeu est l'endroit idéal pour mettre en avant votre amour du sport !</p>
                            <button class="custom--btn--button" @click="goToPlayQuiz" > Jouer au quiz</button>
                        </div>
                    </div>
              </div>

            </section>

            <!-- Contact section starts -->
            <section class="contact" id="contact">
                <div class="container">
                    <div class="contact__content">
                        <h1 class="heading" > Vos impressions</h1>
                        <form action="">
                            <div class="formular">
                                <h1>Partagez avec nous vos impressions</h1>
                                <input type="text" name="name" id="name" placeholder="Name">
                                <input type="email" name="email" id="email" placeholder="Email">
                                <textarea name="" id="description" cols="30" rows="10" placeholder="Ecrivez un un commentaire pour nous donner votre avis" ></textarea>
                                <a href="mailto:dieudonnepaqui@gmail.com" class="btn">Envoyez</a>
                            </div>
                        </form>
                    </div>
                </div>   
            </section>
            <!-- Contact section ends -->

            <!--  footer starts -->
            <footer>
               <div class="container">
                <div class="footer__content">
                    <div class="footer-left">
                        <RouterLink to="/quizCategory" class="lo">Quizzer</RouterLink>
                    </div>
                    <div class="footer-right">
                        <ul>
                            <li><a href="#" title="whatsapp" class="mdi mdi-whatsapp"></a></li> 
                            <li><a href="#" title="facebook" class="mdi mdi-facebook"></a></li>
                            <li><a href="#" title="linkedin" class="mdi mdi-linkedin"></a></li>
                            <li><a href="#" title="twitter" class="mdi mdi-twitter"></a></li>
                        </ul>
                    </div>
                </div>
               </div>
            </footer>

            <!--  footer ends -->
        </div>  
   </body>
</template>

<style scoped>
    
 .category__content{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-bottom: 100px;
} 
h1{
    font-size: 36px;
    font-weight: 600px;
}
#sub__title{
    font-size: 20px;
}
p{
    color: #777;
    font-size: 14px;
    font-weight: 300px;
    line-height: 22px;
    padding: 10px;
}
.row{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}
.category-col{
    flex-basis: 31%;
    background: #fff3f3;
    border-radius: 10px;
    margin-bottom: 5%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}
h3{
    text-align: center;
    font-weight: 600px;
    margin: 10px 0;
}
.category-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
}
@media(max-width:700px){
    .row{
        flex-direction: column;
    }
}

/* ----==========Contact start=============------ */
.heading{
    text-align: center;
    margin: 0 6rem;
    font-size: 4rem;
    padding: 1rem;
    border-bottom: .1rem solid #fff4;
    color: #fff;
}
.heading span {
    color: salmon;
}

form{
    width:500px;
    margin: 0 auto;
    margin-top: 30px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 2px solid #999;
    padding: 1rem;
}
.formular h1{
    padding-top: 2rem;
    text-align: center;
    font-size: 27px;
    color: #eee;
    font-weight: 700;
}
.formular{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

 input{
    background: gris;
/*     margin: 0px auto;
    outline: none;
    background: none;
    border: none;
    width: 100%;
    height: 50px;
    color: #eee;
    background-color: salmon;
    font-size: 25px; */
    color: #000;
} 
 .btn3{
    margin: 20px auto;
    display: block;
    padding: .5rem .75rem;
    border: 2px solid salmon;
    border-radius: 18px;
    background-color: transparent;
    color: salmon;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
} 
::placeholder{
    color: #000;
    font-size: 25px;
}
/* ----==========Contact ends=============------ */
/* ----==========footer=============------ */
.footer__content{
    border-top: 2px solid #555;
    padding: 5rem 0 5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
/*  footer .footer-left a{
     color: #eee;
}  */
footer .footer-right ul{
    display: flex;
    color: #eee;
}
footer .footer-right ul li{
    padding: 1rem 2rem;
    
}
footer .footer-right ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: salmon;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid #eee;
    color: #2c9bc6;
    font-size: 40px;
}
footer .footer-right ul li a .fa-brands{
   /*  color: #000; */
    color: #2c9bc6;
}
footer .footer-right ul li a .fa-brands:hover{
    box-shadow: 10px 10px 10px white;
}

</style>