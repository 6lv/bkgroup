<template>
    <div>
        <div class="uk-padding">
        <div class="uk-h3 white--text">Nous joindre</div>

        <p>
        <v-icon>mdi-phone</v-icon>
   Téléphone : 71 69 25 38
</p>
<p>
   <v-icon>mdi-email</v-icon>  Adresse E-mail : direction.generale@bkgroup-ci.org
</p>


 <div class="uk-h3 white--text">Yamoussoukro , 220 Logement </div>
  <b>Encore besoin d'aide ?</b><br><br><br>
    <span>Envoyez-nous votre requête via le formulaire en ligne ci-contre et nous vous répondrons sous 2 jours ouvrables.</span>
<br><br>   

<div class="uk-width-1-2@s elevation-3 pa-5 uk-border-rounded">
<v-text-field
    name="name"
    label="Nom complet"
    id="id"
></v-text-field>
<v-text-field
    name="name"
    label="Adresse E-mail"
    id="id"
></v-text-field>
<v-text-field
    name="name"
    label="Sujet"
    id="id"
></v-text-field>

<v-textarea label="Votre message">

</v-textarea>

<br>
<v-btn>
Envoyer
</v-btn>
</div>
        </div>


       
    </div>
</template>

<script>
export default {
    
}
</script>