<template>
    <div>
    <v-tabs light slider-color="transparent" color="primary" >
    <v-tab exact="" to="/formations/insertions"><span >Formations d'insertions</span></v-tab>
     <v-tab exact="" to="/formations/qualifiantes"><span >Formations qualifiantes</span></v-tab>
    </v-tabs>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    
}
</script>