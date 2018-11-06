<template>
    <div>
        <video-element v-for="(video, index) in $store.state.videos.files"
               :key="index"
               :name="video.name"
               :file_name="video.file"
               :file_extension="video.file_extension"
               :file_description="video.description"
               :video_tags="video.tags"
               :directory="$store.state.videos.directory">
        </video-element>
    </div>
</template>

<script>
  import VideoElement from '../components/videos/VideoElement';

  export default {
    name: 'videos',
    components: { VideoElement }
  };
</script>

<style scoped>

</style>
