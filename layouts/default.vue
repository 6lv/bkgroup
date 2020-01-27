<template>
  <div>
    
    <v-app  app>
    <app-bar></app-bar>
          <v-content light>
                <client-only>
                <nuxt/>
                </client-only>
          </v-content>
    </v-app>
  </div>
</template>

<script>
import appBar from './appBar'
export default {
  components:{appBar}
  
}
</script>