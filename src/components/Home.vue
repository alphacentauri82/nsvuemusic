<template>
  <Page class="page">
    <ActionBar class="action-bar" title="nativescriptvue-music"/>
    <ScrollView orientation="vertical">
      <StackLayout>
        <SearchBar hint="Search Artist" v-model="searchPhrase"/>
        <Button class="btn btn-primary" @tap="search">Search</Button>
        <template v-for="(r, key, index) in getItemsMusic">
            <Image id="img" :key="`img${index}`" v-if="r.images.length" :src="r.images[0].url" stretch="none" />
            <Image id="img" :key="`img${index}`" v-else src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
            <Label id="lblName" :key="`name${index}`" :text="`Name: ${r.name}`" />
            <Label id="lblMusic" :key="`gnres${index}`" v-if="r.genres.length" :text="`Music: ${ r.genres[0] }`" />
        </template>
        </StackLayout>
      </ScrollView>
  </Page>
</template>
<script>

  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        searchPhrase: ''
      }
    },
    computed: mapGetters([
      'getItemsMusic'
    ]),
    methods: {
      ...mapActions([
        'searchMusic'
      ]),
      search () {
        console.log('search')
        this.searchMusic({ data: this.searchPhrase })
      }
    }
  };
</script>
<style scoped>
  #img{
    margin-top: 45px;
  }
</style>


