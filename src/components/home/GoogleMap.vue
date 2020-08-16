<template>
  <div class="google-map" id="map"></div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      lat: 53,
      lng: -2,
    }
  },
  methods: {
    renderMap() {
      // eslint-disable-next-line no-unused-vars,no-undef
      const googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: this.lat,
          lng: this.lng,
        },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
      })
    },
  },
  mounted() {
    this.renderMap()
  },
}
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
