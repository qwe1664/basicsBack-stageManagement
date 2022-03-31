<template>
  <div>
    <PanelProup/>
    <Chart/>
    <Map></Map>
  </div>
</template>

<script>
import PanelProup from './panelProup'
import Chart from './Chart'
import Map from './map.vue'

export default {
data () {
  return {
    
  }
},
components:{
  PanelProup,
  Chart,
  Map
}
}
</script>

<style>

</style>