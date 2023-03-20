<template>
    <div>
      <button
        v-for="marker in markers"
        @click="center = marker.position"
        :key="marker.position"
      >{{marker.title}}</button>
      <GoogleMap :api-key="getKey" style="width: 100%; height: 500px" :center="center" :zoom="7">
        <Marker v-for="m in markers" :options="m" @click="center = m.position" :key="m.position" />
      </GoogleMap>
    </div>
  </template>
  
  <script>
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default {
    props: {},
    components: { GoogleMap, Marker },
    data() {
      return {
        center: { lat: 31.7683, lng: 35.2137 },
        markers: [
          {
            title: "Tel-Aviv",
            label: "Toy",
            position: {  lat: 32.0853, lng: 34.7818 }
          },
          {
            title: "Jerusalem",
            label: "Toy",
            position: { lat: 31.7683, lng: 35.2137 }
          },
          {
            title: "Kfar-Saba",
            label: "Toy",
            position: { lat: 32.1782, lng: 34.9076 }
          }
        ]
      };
    },
    computed:{
      getKey(){
        return 'AIzaSyCbrdwS7nOKBdOhxxLPfavq31v5NnX8I70'
      }
    }
  
  };
  </script>
  
