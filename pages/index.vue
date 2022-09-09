<template>
  <div>
    <div class='hero bg-base-200 rounded-box'>
      <div class='hero-content text-center content-center'>
        <div class='max-w-md flex-col my-5'>
          <h1 class='text-3xl font-bold'>Hello 👋</h1>
          <p class='mt-5 text-xl'>This is <span class='font-mono text-accent-focus'>TrackMate</span>!</p>
          <p class='mt-2 mb-5'>A simple web app to track your trainings! 🏊</p>
          <div class='content-center mt-5 mb-10'>
            <div class='flex flex-row h-20 m-5 rounded-lg bg-accent text-accent-content items-center'>
              <div
                class='flex w-10 h-10 rounded-full bg-base-200 mx-5 place-content-center items-center font-semibold text-lg'>
                1
              </div>
              <div class='w-max text-lg'>Track your trainings</div>
            </div>
            <div class='flex flex-row h-20 m-5 rounded-lg bg-accent text-accent-content items-center'>
              <div
                class='flex w-10 h-10 rounded-full bg-base-200 mx-5 place-content-center items-center font-semibold text-lg'>
                2
              </div>
              <div class='w-max text-lg'>Get a dashboard</div>
            </div>
          </div>
          <NuxtLink to='/login'>
            <button class='btn btn-primary'>Get Started</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: 'guest'
}
</script>
