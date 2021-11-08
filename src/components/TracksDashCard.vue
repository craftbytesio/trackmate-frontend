<template>
    <v-card
        class="mt-4 mx-auto"
        max-width="400"
    >
        <v-sheet
            class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
        >
        <v-sparkline
            :labels="chartDataLabels"
            :value="chartDataValues"
            color="white"
            line-width="2"
            padding="16"
        ></v-sparkline>
        </v-sheet>
        <v-card-text class="pt-0">
            User action
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th class="text-left">
                        Date
                    </th>
                    <th class="text-left">
                        Distance
                    </th>
                    <th>Feel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in tracks"
                    :key="item.id"
                    >
                    <td>
                        <v-icon>{{ getIcon(item.sport_type) }}</v-icon>
                    </td>
                    <td>{{ getGermanDate(item.track_date) }}</td>
                    <td>{{ item.distance_m }}m</td>
                    <td>
                        <v-icon>{{ getAssesmentIcon(item.assessment) }}</v-icon>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {apiClient} from '@/service/API'
import moment from 'moment'

export default Vue.extend({
    name: 'TracksDashCard',
    data: () => ({
      tracks: null,
      chartDataLabels: [] as any[string],
      chartDataValues: [] as any[number],
    }),
    methods:{
        getIcon(type:string){
            switch (type) {
                case 'Swimming':
                    return 'mdi-swim'
                default:
                    return 'mdi-run-fast'
            }
        },
        getAssesmentIcon(type:number){
            switch (type) {
                case 0:
                    return 'mdi-emoticon-sick-outline'
                case 1:
                    return 'mdi-emoticon-neutral-outline'
                case 2:
                    return 'mdi-emoticon-outline'
                case 3:
                    return 'mdi-emoticon-cool-outline'
                default:
                    return 'mdi-emoticon-poop-outline'
            }
        },

        getGermanDate: function (date:string) {
            return moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
        },
    },
    watch: {
        tracks: function(items) {
            let data: [number]

            items.forEach(element => {
                this.chartDataLabels.push(this.getGermanDate(element.track_date))
                this.chartDataValues.push(element.distance_m)
            });


            
        }
    },
    async mounted() {
        apiClient
        .get('/tracks')
        .then((response) => {
          this.tracks = response.data.data
        })
    }
})

</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>