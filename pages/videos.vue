<template>
  <div>
    <video-element
      v-for="(video, index) in videos.files"
      :key="index"
      :name="video.name"
      :file_name="video.file"
      :file_extension="video.file_extension"
      :file_description="video.description"
      :video_tags="video.tags"
      :meta="video.meta"
      :directory="videos.directory"/>
  </div>
</template>

<script>
import VideoElement from '../components/videos/VideoElement'
import { mapState } from 'vuex'

export default {
  name: 'Videos',
  components: { VideoElement },
  computed: {
    ...mapState({
      videos: state => state.videos
    })
  }
}
</script>

<style scoped>

</style>
