<template>
  <form @submit.prevent="addTrack">
    <v-card-text>
      <v-text-field
          :label="$t('dateLabel')"
          v-model="track_date"
          type="date"
      ></v-text-field>
      <v-text-field
          :label="$t('distance_mLabel')"
          v-model="distance_m"
          type="number"
      ></v-text-field>
      <v-select
          v-model="sport_type"
          :items="$t('sportTypes')"
          item-text="name"
          item-value="value"
          :label="$t('sport_typesSelect')"
          single-line
      ></v-select>
      <v-select
          v-model="assessment"
          :items="$t('assessments')"
          item-text="name"
          item-value="value"
          :label="$t('assessmentsSelect')"
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
        {{ $t('addLabel') }}
      </v-btn>
    </v-card-actions>
  </form>
</template>

<script>
import tracks from '@/store/tracks'

export default {
  name: "AddTrackForm",
  data() {
    return {
      track_date: null,
      distance_m: null,
      sport_type: null,
      assessment: null,
      error: null,
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
      tracks.saveTrack(payload);
    }
  }
}
</script>

<style scoped>

</style>