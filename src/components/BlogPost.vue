<!-- BlogPost.vue -->
<template>
  <div class="blog-post">
    <h2>{{ title }}</h2>
    <p v-if="!showFullText">{{ truncatedText }}</p>
    <p v-else>{{ fullText }}</p>
    <button @click="toggleText">
      {{ showFullText ? "Read Less" : "Read More" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    truncatedText: {
      type: String,
      required: true,
    },
    fullText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showFullText: false,
    };
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText;
    },
  },
};
</script>
