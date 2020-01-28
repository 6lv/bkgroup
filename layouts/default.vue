<template>
  <div>
    
    <v-app  app>
     <client-only>
    <app-bar></app-bar>
          <v-content light>
               
                <nuxt/>

          </v-content>
                          </client-only>
    </v-app>
  </div>
</template>

<script>
import appBar from './appBar'
export default {
  components:{appBar}
  
}
</script>