    <template>
      <item-card :item="item"></item-card>
    </template>

    <script>
    import ItemCard from './ItemCard.vue';
    import data from '../data/data';

    export default {
      components: {
        ItemCard,
      },
      props: {
        stackNameUrl: {
          required: true,
          type: String,
        },
      },
      data() {
        return {
          item: {},
        }
      },
      computed: {
        isItemLoaded() {
          return this.item && this.item.name;
        },
        stackName() {
          return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
        }

      },
      created() {
        this.item = data.find( fw => fw.name === this.stackName);
      }
    }
    </script>

    <style>

    </style>



