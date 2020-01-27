<template>
    <div>
      <v-toolbar>
    <v-tabs light slider-size="0">
        <v-tab exact="" to="/bourses">Etudier en chine</v-tab>
    <v-tab exact="" to="/bourses/university">Nos universités</v-tab>
<v-tab exact="" to="/bourses/postuler">Postuler</v-tab>
    </v-tabs>
    </v-toolbar>
        <nuxt-child />
    </div>
</template>
<script>
export default {
    
}
</script>