<template>
  <div class="footer">
      <span>Морские туры</span>
      <a href=""></a>
      <a href=""></a>

      <span>О нас</span>
      <div>
        <div>
          <a href=""></a>

          <a href=""></a>
          <a href=""></a>
        </div>
        <span class="company">ООО “Виртус-тур”, ОГРН</span>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.footer {
  padding 8.5rem 0
  background-image linear-gradient(180deg, rgba(25,30,40,0.30) 0%, rgba(25,30,40,0.60) 100%)
}

.company {
  opacity 0.4
  font-family SFProText-Regular
  font-size 1.6rem
  @media (max-width: 1040px) {
    font-size 1.4rem
  }
}
</style>
