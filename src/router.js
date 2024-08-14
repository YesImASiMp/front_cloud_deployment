import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'


Vue.use(Router)

export default new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   linkActiveClass: 'active',
   routes: [
      {
         path: '/',
         redirect: '/games'
      },
      {
         path: '/games',
         name: 'games',
         component: Games
      },
      {
         path: '/games/new',
         name: 'new-game',
         component: New
      },
      {
         path: '/games/:id',
         name: 'show',
         component: Show
      },
      {
         path: '/games/:id/edit',
         name: 'edit',
         component: Edit
      },
   ]
})