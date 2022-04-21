<template>
  <div>
    <PageCaption caption='Create a Track' />
    <div class="px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-shadow text-m font-bold mb-2" for="date">
          Date
        </label>
        <input
          v-model="date"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="date"
        >
      </div>
      <div class="mb-4">
        <label class="block text-shadow text-m font-bold mb-2" for="distanceM">
          Distance in Meter
        </label>
        <input
          v-model="distanceM"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="number"
        >
      </div>
      <div class="mb-9">
        <label class="block text-shadow text-m font-bold mb-2" for="assessment">
          Assessment
        </label>
        <select v-model='assessment' class="select select-bordered w-full py-2 px-3 text-grey-darker bg-white">
          <option disabled selected>Select assessment</option>
          <option value='2'>Good</option>
          <option value='1'>Neutral</option>
          <option value='0'>Bad</option>
        </select>
      </div>
      <div class="flex flex-col items-center space-y-4">
        <button
          class="btn-primary btn-wide text-white font-bold py-2 px-4 rounded"
          type='button'
          @click='addTrack'
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import createTrack from '~/apollo/mutations/createTrack'

export default {
  name: 'CreateTrack',
  middleware: 'auth',
  data() {
    return {
      assessment: null,
      distanceM: null,
      date: '',
    }
  },
  methods: {
    async addTrack(){
      const payload = {
        assessment: this.assessment,
        distanceM: this.distanceM,
        date: this.date,
      }
      try {
        await this.$apollo.mutate({
          mutation: createTrack,
          variables: payload
        }).then(() => {
          this.$router.push({name: 'Home'})
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
