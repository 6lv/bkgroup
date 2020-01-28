<template>
    <div>

    <van-popup class="black" position="top" :style="{height:'90%'}" v-model="state.show">
  
    <v-toolbar>

    <span color="primary">BKGROUP</span>
        <v-spacer></v-spacer>
      
            <v-btn @click="state.show=false" icon color="primary" ><v-icon>mdi-close</v-icon></v-btn>

    
    </v-toolbar>

    <div class="uk-padding black">
        <ul class="uk-list uk-list-divider">
        <nuxt-link tag="li" to="/">Accueil</nuxt-link>
        <nuxt-link tag="li" to="/evenements">Evenement</nuxt-link>
        <nuxt-link tag="li" to="/bourses">Bourses</nuxt-link>
        <nuxt-link tag="li" to="/formations">Nos formations</nuxt-link>
                <nuxt-link tag="li" to="/about">A propos</nuxt-link>
               <nuxt-link tag="li" to="/contact">Contact</nuxt-link>
   
        </ul>
    </div>
    
    </van-popup>
        <v-app-bar app>
        <v-toolbar-title>
       <v-btn @click="state.show=true" class="primary--text font-weight-black "> <v-icon color="white">menu</v-icon> &nbsp; BKGROUP</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
    <v-btn icon color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
       <template  v-slot:extension>
            <div  class="flex-grow-1 uk-visible@m">
                <v-tabs centered="">
                <v-tab to="/">Accueil</v-tab>
                <v-tab to="/evenements">Evenements</v-tab>
                <v-tab to="bourses">Bourses</v-tab>
                <v-tab to="/formations">Nos Formations</v-tab>
                <v-tab to="/about">A propos</v-tab>
                <v-tab to="/contact"> Contact</v-tab>
                </v-tabs>
            </div>
        </template>
        </v-app-bar>
    </div>
</template>

<script>
import { reactive, computed, watch } from "@vue/composition-api"
export default {

    setup(props,{root}) {

        const state =reactive({
            show:false,
            routeChange: computed(()=>root.$route.path)

        })
        
        watch(()=>state.routeChange,(route,old)=>{

            state.show=false
        })


        

            return {state}
    }
    
}
</script>