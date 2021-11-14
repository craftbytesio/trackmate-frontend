<template>
  <form @submit.prevent="addTrack">
    <v-card-text>
      <v-text-field
          label="Datum"
          v-model="track_date"
          type="date"
      ></v-text-field>
      <v-text-field
          label="Distanz in Meter"
          v-model="distance_m"
          type="number"
      ></v-text-field>
      <v-select
          v-model="sport_type"
          :items="sport_types"
          item-text="name"
          item-value="value"
          label="Sportart wählen"
          single-line
      ></v-select>
      <v-select
          v-model="assessment"
          :items="assessments"
          item-text="name"
          item-value="value"
          label="Bewertung setzen"
          single-line
      ></v-select>
      <small class="red--text">{{ this.error }}</small>
    </v-card-text>
    <v-card-actions>
      <v-btn
          outlined
          rounded
          block
          color="primary"
          @click="addTrack"
      >
        Hinzufügen
      </v-btn>
    </v-card-actions>
  </form>
</template>

<script>
import {apiClient} from "../service/API";

export default {
  name: "AddTrackForm",
  data() {
    return {
      track_date: null,
      distance_m: null,
      sport_type: null,
      assessment: null,
      error: null,
      sport_types: [
        {name: 'Schwimmen', value: 'Swimming'},
        {name: 'Radfahren', value: 'Biking'},
        {name: 'Laufen', value: 'Running'}
      ],
      assessments: [
        {name: 'Neutral', value: '0'},
        {name: 'Schlecht', value: '1'},
        {name: 'Mittel', value: '2'},
        {name: 'Gut', value: '3'}
      ],
    }
  },
  methods: {
    addTrack(){
      const payload = {
        track_date: this.track_date,
        distance_m: this.distance_m,
        sport_type: this.sport_type,
        assessment: this.assessment,
        user_id: this.$store.getters.getCurrentUser.id,
      }
      this.error = null
      apiClient.post('/tracks', payload)
        .then(() => this.$router.push({name: 'Home'}))
        .catch((error) => this.error = error)
    }
  }
}
</script>

<style scoped>

</style>