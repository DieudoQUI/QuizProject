  <script lang="ts" setup>
  import { useQuizAppStore } from '@/stores/quizApp';
  import { onMounted, onBeforeMount } from 'vue';
  import { storeToRefs } from 'pinia';
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import router from '@/router';

  
  function goToQuizCategory(){
    router.push('/quizCategory')
  }
  function replayQuiz(){
    // Reset the quiz state and navigate to the quiz category
    currentQuestion.value = 0;
    selectedOption = null;
    quizCompleted.value = false;
    startTimer();
  }
  
  const { initialise } = useQuizAppStore();
  const { quizsApp } = storeToRefs(useQuizAppStore());
  
  const quizCompleted = ref(false);
  const currentQuestion = ref(0);
  const timer = ref(50);
  let countdownInterval;
  
  let selectedOption = null;
  
  const score = computed(() => {
    let value = 0;
    quizsApp.value.forEach(q => {
      if (q.selected != null && q.answer === q.selected) {
        value++;
      }
    });
    return value;
  });
  console.log(score);
  
  
  const getCurrentQuestion = computed(() => {
    let question = quizsApp.value[currentQuestion.value];
    question.index = currentQuestion.value;
    return question;
  });
  
  const startTimer = () => {
    timer.value = 50;
    countdownInterval = setInterval(() => {
      timer.value--;
      if (timer.value === 0) {
        clearInterval(countdownInterval);
        NextQuestion();
      }
    }, 1000);
  };
  
  onBeforeMount(() => {
    startTimer();
  });
  
  const SetAnswer = (e) => {
    clearInterval(countdownInterval);
    quizsApp.value[currentQuestion.value].selected = parseInt(e.target.value);
    selectedOption = parseInt(e.target.value);
    e.target.value = null;
    startTimer();
  };
  
  const NextQuestion = () => {
    clearInterval(countdownInterval);
    if (currentQuestion.value < quizsApp.value.length - 1) {
      currentQuestion.value++;
      selectedOption = null;
      startTimer();
    } else {
      quizCompleted.value = true;
    }
  };
  
  onMounted(async () => {
    await initialise();
  });
  onBeforeMount(async () => {
    await initialise();
  });
  </script>

<template>
  <div class="container">
    <Navbar/>
    <main class="playQuizPage">
      <h1>Le quiz</h1>
      
      <section class="quiz" v-if="!quizCompleted">
        <div class="quiz-info">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="timer">Temps restant : {{ timer }}s</span>
          <span class="score">Score {{ score }}/{{ quizsApp.length }}</span>
        </div>
        
        <div class="options">
          <label 
            v-for="(option, index) in getCurrentQuestion.options" 
            :for="'option' + index" 
            :class="`option ${
              selectedOption === index  
                ? index === getCurrentQuestion.answer 
                  ? 'correct' 
                  : 'wrong'
                : ''
            } ${
              selectedOption !== null && index !== selectedOption 
                ? 'disabled'
                : ''
            }`">
            <input 
              type="radio" 
              :id="'option' + index" 
              :name="getCurrentQuestion.index" 
              :value="index" 
              v-model="selectedOption" 
              :disabled="selectedOption !== null"
              @change="SetAnswer" 
            />
            <span>{{ option }}</span>
          </label>
        </div>
        
        <button 
          @click="NextQuestion" 
          :disabled="selectedOption === null">
          {{ 
            getCurrentQuestion.index === quizsApp.length - 1 
              ? 'Terminer' 
              : selectedOption === null
                ? 'Sélectionner une option'
                : 'Question suivante'
          }}
        </button>
      </section>
    
      <section v-else>
        <h2>Vous avez terminé le quiz !</h2>
        <p>Votre score est de {{ score }}/{{ quizsApp.length }}</p>
        <div class="previousLink">
          <button @click="replayQuiz" class="custom--btn--button">Rejouer le quiz</button>
          <button @click="goToQuizCategory" class="custom--btn--button">Revenir vers Catégorie</button>
        </div>
      </section>
    </main>
   
  </div>
  
</template>


<style scoped>
* {
	
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}


.playQuizPage {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 90vh;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color:#2c9bc6;;
	padding: 1rem;
	width: 100%;
	max-width: 640px;
}

.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.quiz-info .question {
	/* color: #8F8F8F; */
    color: #fff;
	font-size: 1.5rem;
}

.quiz-info.score {
    color: #fff;
	/* color: #FFF; */
	font-size: 1.5rem;
}

.options {
	margin-bottom: 1rem;
    color: #fff;
    font-size: 1.5rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #271c36;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: #2d213f;
}

.option.correct {
	background-color: #2cce7d;
}

.option.wrong {
	background-color: #ff5a5f;
}

.option:last-of-type {
	margin-bottom: 0;
}

.option.disabled {
	opacity: 0.5;
}

.option input {
	display: none;
}

button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: #2d213f;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #8F8F8F;
	font-size: 1.5rem;
	text-align: center;
}
.previousLink{
  display: flex;
  gap: 50px;
}
</style>