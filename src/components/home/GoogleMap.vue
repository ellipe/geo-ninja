<template>
  <div class="google-map" id="map"></div>
</template>

<script>
import db from '../../firebase/init'
import firebase from 'firebase'
export default {
  name: 'GoogleMap',
  data() {
    return {
      lat: 53,
      lng: -2,
      user_id: null,
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
    let user = firebase.auth().currentUser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          db.collection('users')
            .where('user_id', '==', user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                db.collection('users')
                  .doc(doc.id)
                  .update({
                    geolocation: {
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude,
                    },
                  })
              })
            })
            .then(() => {
              this.lat = pos.coords.latitude
              this.lng = pos.coords.longitude
              this.renderMap()
            })
        },
        err => {
          console.log(err)
          this.renderMap()
        },
        {
          maximumAge: 60000,
          timeout: 3000,
        }
      )
    } else {
      this.renderMap()
    }
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
