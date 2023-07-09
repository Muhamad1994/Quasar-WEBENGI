<!-- Main.vue -->
<template>
  <div>
    <blog-post
      v-for="post in blogPosts"
      :key="post.id"
      :title="post.title"
      :truncatedText="post.truncatedText"
      :fullText="post.fullText"
    ></blog-post>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Post 1",
          truncatedText: "This is the truncated text of post 1...",
          fullText: "This is the full text of post 1.",
        },
        {
          id: 2,
          title: "Post 2",
          truncatedText: "This is the truncated text of post 2...",
          fullText: "This is the full text of post 2.",
        },
        // Add more blog posts as needed
      ],
    };
  },
};
</script>

<style scoped>
.blog-post {
  margin-bottom: 20px;
}
</style>
