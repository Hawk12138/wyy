<template>
  <TopNav/>
  <Swipe/>
  <TopContent/>
</template>

<script>
import TopNav from '@/components/faxian/TopNav.vue'
import Swipe from '@/components/faxian/Swipe.vue'
import TopContent from '@/components/faxian/TopContent.vue'
export default{
  name:"faxian",
  components:{
    TopNav,
    Swipe,
    TopContent,
  }
}
</script>
