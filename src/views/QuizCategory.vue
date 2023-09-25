<script lang="ts" setup>
 import type FooterQuizVue from '@/components/FooterQuiz.vue';
 import Navbar from '@/components/Navbar.vue' 
 import router from '@/router';
 import FooterQuiz from '@/components/FooterQuiz.vue';


  function goToPlayQuiz(){
    router.push('/playQuizPage')
  }
</script>

<template>
   <body>
        <div class="category__wrapper">
            <!--  Navbar starts -->
             <Navbar/> 
            <!--  Navbar ends -->
            <!--  Category starts -->
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
            <!--  Category ends -->

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
                                <textarea name="" id="description" cols="30" rows="10" placeholder="Ecrivez un commentaire pour nous donner votre avis" ></textarea>
                                <a href="mailto:dieudonnepaqui@gmail.com" class="btn">Envoyez</a>
                            </div>
                        </form>
                    </div>
                </div>   
            </section>
            <!-- Contact section ends -->

           <!--  footer starts -->
           <FooterQuiz/>
            <!--  footer ends -->
        </div>  
   </body>
</template>

<style scoped>
    
 .category__content{
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
    font-weight: 300;
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
.contact{
    margin-bottom: 3rem;
}
.heading{
    text-align: center;
    margin: 0 6rem;
    font-size: 4rem;
    padding: 1rem;
    border-bottom: 2px solid var(--color-blue);
    color: #fff;
}
form{
    width:500px;
    margin: 0 auto; 
    margin-top: 30px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 1.5rem;
    box-shadow: inset 23px 4px 7px -25px #c9ccd7, 7px 0px 8px 2px#c9ccd7; 
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
    border: none;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  font-size: 17px;

   
} 
 .btn{
    margin: 0  auto;
    display: block;
    padding: .5rem .75rem;
    border: 2px solid var(--color-blue);
    border-radius: 12px;
    background-color: transparent;
    color: var(--color-blue);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
} 
.btn:hover{
    background-color: var(--color-blue);
    color: #fff;
}
::placeholder{
    color: #333;
    font-size: 17px;
}
/* ----==========Contact ends=============------ */

</style>