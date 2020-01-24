<template>
  <div class="contacts">
    <wk-header title="Контакты" id="contacts"></wk-header>
    <div>
      <wk-contacts/>
      <wk-form/>
    </div>
  </div>
</template>

<script>
import wkHeader from '@/components/header/index.vue'
import wkContacts from '@/components/contacts/index.vue'
import wkForm from '@/components/form/index.vue'

export default {
  name: 'home',
  components: {
    wkHeader,
    wkContacts,
    wkForm
  }
}
</script>

<style lang="stylus" scoped>
.contacts {

}
</style>
