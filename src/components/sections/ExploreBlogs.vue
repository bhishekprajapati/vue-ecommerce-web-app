<template>
  <section class="l-section l-blogs">
    <header class="l-section__header">
      <em class="sub-title">- Our Blog</em>
      <h2 class="h2-b h1-b:md">Check Out Our Blog</h2>
    </header>
    <BlogGrid>
      <BlogGridRow v-for="blog in blogs" :key="blog.title">
        <BlogCard 
          :title="blog.title"
          :thumbnail-uri="blog.thumbnailUri"
          :keyword="blog.keyword"
          :is-recent="blog.isRecent"
        />
      </BlogGridRow>
    </BlogGrid>
    <div class="l-blogs__btn">
      <button type="button" class="btn btn-primary">View All</button>
    </div>
  </section>
</template>

<script>
import BlogGrid from "../blogs/BlogGrid.vue";
import BlogGridRow from "../blogs/BlogGridRow.vue";
import BlogCard from "../blogs/BlogCard.vue";

export default {
  data() {
    return {
      blogs: [
        {
          title: "Morning Skincare Routine: 10 Top Tips for you",
          thumbnailUri: "https://unsplash.com/photos/lZ7tao79Y1A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDF8fG1vcm5pbmclMjBza2luY2FyZXxlbnwwfHx8fDE2NTU1MzUwNzE&force=true&w=1920",
          keyword: "Top tips",
          isRecent: true,
        },
        {
          title: "New Collection is Out",
          thumbnailUri: "https://unsplash.com/photos/1mp7rF7_j2I/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NTYxMDYz&force=true&w=1920",
          keyword: "New In",
          isRecent: true,
        },
        {
          title: "Always stay fresh",
          thumbnailUri: "https://unsplash.com/photos/zuj2m7qxDA0/download?ixid=MnwxMjA3fDF8MXxzZWFyY2h8MXx8ZnJlc2h8ZW58MHx8fHwxNjU1NTI3ODM4&force=true&w=1920",
          keyword: "how to",
          isRecent: false,
        },
        {
          title: "Improve your Skin now",
          thumbnailUri: "https://unsplash.com/photos/tpC9yCBfDJQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NTYzNjY3&force=true&w=1920",
          keyword: "Masks",
          isRecent: false,
        },
        {
          title: "Stay safe in sun",
          thumbnailUri: "https://unsplash.com/photos/tqbGJh1oSig/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NTY0MDA0&force=true&w=1920",
          keyword: "sun care",
          isRecent: false,
        },
        {
          title: "Explore our Bestselling Products",
          thumbnailUri: "https://unsplash.com/photos/_42NKYROG7g/download?force=true&w=1920",
          keyword: "bestsellers",
          isRecent: false,
        },
      ],
    };
  },
  components: {
    BlogGrid,
    BlogGridRow,
    BlogCard,
  },
};
</script>