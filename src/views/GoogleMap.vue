<template>
    <GoogleMap api-key="AIzaSyCbrdwS7nOKBdOhxxLPfavq31v5NnX8I70" style="width: 100%;
         height: 500px" :center="pos1" :zoom="15">
        <Marker :options="{ position: pos1 }" />
        <Marker :options="{ position: pos2 }" />
        <Marker :options="{ position: pos3 }" />
    </GoogleMap>
</template>
  
<script>

import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: { GoogleMap, Marker },
    data() {
        return {

            pos1: { lat: 40.689247, lng: -74.044502 },
            pos2: { lat: 40.689247, lng: -74.045502 },
            pos3: { lat: 40.689247, lng: -74.046502 }
        }
    }

}
</script>