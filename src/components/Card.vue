<template>
  <section class="c-card box">
    <div class="c-card-header">
      <h1 class="title is-2">
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="c-card-body">
      <slot name="body"></slot>
    </div>
    <div class="c-card-footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.c-card-header {
  margin-bottom: 20px;
  text-align: center;
}
.c-card-body {
  margin-bottom: 20px;
}
.c-card-footer {
  display: flex;
  justify-content: flex-end;
}
.c-card-footer > * {
  margin-left: 20px;
}
</style>