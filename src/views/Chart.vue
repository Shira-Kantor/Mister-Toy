<template>
    <DoughnutChart :chartData="testData" :options="options" />
    <!-- <pre> {{ toys }}</pre> -->
</template>

<script lang="ts">
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'Chart',
    components: { DoughnutChart },
    data() {
        return {
            testData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [

                            '#0079AF',
                            '#123E6B',
                            '#97B0C4',
                            '#A5C8ED',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    // legend: { display: false }
                    legend: { position: 'bottom' }
                }
            },
        }
    },

    computed: {
        toys() {
            return this.$store.getters.getToys
        }
    },
    created() {
        const labelAvgPricesMap = this.toys.reduce((acc, toy) => {
            toy.labels.forEach(label=>{
                if (acc[label]) acc[label]++
                else acc[label] = 1
            })
            return acc
        }, {}) 

        this.testData.labels = Object.keys(labelAvgPricesMap)
        this.testData.datasets[0].data = Object.values(labelAvgPricesMap)
    },

}
</script>
