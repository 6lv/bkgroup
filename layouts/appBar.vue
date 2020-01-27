<template>
    <div>
        <v-app-bar app>
        <v-toolbar-title>
       <span class="primary--text font-weight-black "> BKGROUP</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
    <v-btn icon color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
        <template v-slot:extension>
            <div class="flex-grow-1">
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
import { reactive } from "@vue/composition-api"
export default {

    setup(props) {

        const state =reactive({

        })

            return {state}
    }
    
}
</script>