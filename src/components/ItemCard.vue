<template>
  <div class="card p-3">
    <div class="text-center">
      <img class="img-fluid" :src="item.logo" width="100" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ item.name | capitalize }} </h5>
      </div>
      <div>
        <span v-for="(group, index) in item.stack" :key="index" :class="`badge badge-${tags[group]}`">{{ group }}</span>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			tags: {
				language: 'light',
				framework: 'dark',
				frontend: 'success',
				backend: 'danger',
				mobile: 'warning',
				web: 'secondary',
				hybrid: 'info',
				database: 'danger'
			}
		};
	},
	filters: {
		capitalize: item => {
			return item.toUpperCase();
		}
	},
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

