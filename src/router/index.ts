import { createRouter, createWebHistory } from 'vue-router'

import QuizCategory from '@/views/QuizCategory.vue' 
import AccessPage from '@/views/AccessPage.vue' 
import PlayQuizPage from '@/views/PlayQuizPage.vue'
import ClassementPage from '@/views/ClassementPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'/accessPage',
      component:AccessPage,
    },
    {
      path:'/quizCategory',
      name:'/quizCategory',
      component:QuizCategory,  
    },
    {
      path:'/playQuizPage',
      name:'/playQuizPage',
      component:PlayQuizPage, 
    },
    {
      path:'/classementPage',
      name:'/classementPage',
      component:ClassementPage, 
    }
  ]
})

export default router
