<template>
  <div>

    <PageCaption caption='Dashboard' />
    <div class="stats stats-vertical shadow w-full space-y-4">
      <div class="stat bg-base-200">
        <div class="stat-title text-2xl text-info font-medium mb-4">Total Distance</div>
        <div class="stat-value">{{ trackStatistics.sum }} m</div>
      </div>

      <div class="stat bg-base-200">
        <div class="stat-figure text-secondary text-2xl">
          <NuxtLink to="/tracks/create"><FontAwesomeIcon icon="fa-regular fa-square-plus" /></NuxtLink>
        </div>
        <div class="stat-title text-2xl text-info font-medium mb-4">Total Tracks</div>
        <div class="stat-value">{{ trackStatistics.count }}</div>
      </div>

      <div class="stat bg-base-200">
        <div class="stat-title text-2xl text-info font-medium mb-4">Weekly Tracks</div>
        <div class="stat-value">
          <div class='flex justify-between items-center'>
            <progress class="progress progress-accent" :value="(trackStatistics.weeklyCount )/maxWeeklyTracks*100" max="100"></progress>
            <p class='ml-5 text-lg font-light'>{{trackStatistics.weeklyCount + '/' + maxWeeklyTracks }}</p>
          </div>
        </div>
      </div>
      <div class="stat bg-base-200">
        <div class="stat-figure text-secondary text-2xl">
          <FontAwesomeIcon icon="fa-solid fa-info" />
        </div>
        <div class="stat-title text-2xl text-info font-medium mb-4">Average Track</div>
        <div class="stat-value">{{ trackStatistics.avg }} m</div>
      </div>
    </div>
  </div>
</template>

<script>
import trackStatistics from '~/apollo/queries/trackStatistics'

export default {
  name: 'HomePage',
  middleware: 'auth',
  data () {
    return {
      maxWeeklyTracks: 2,
      trackStatistics: {}
    }
  },
  apollo: {
    trackStatistics: {
      query: trackStatistics,
      fetchPolicy: 'no-cache'
    }
  },
}
</script>

<style scoped>

</style>
