<template>
  <div class="container-fluid">
    <div class="search-wrapper">
      <form v-on:submit="getfilteredData">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Enter key word  ..." v-model="search" v-on:keyup="getfilteredData" :disabled="disableSearchBar">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="language.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Language
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="framework.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Framework
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="frontend.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Frontend
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="backend.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Backend
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="web.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Web
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="mobile.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Mobile
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="hybrid.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Hybrid
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" v-model="database.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
          Database
        </label>
      </div>
    </div>
    <div class="card-columns">
      <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard';
import data from '../data/data';

export default {
	name: 'SearchPage',
	components: {
		'item-card': ItemCard
	},
	computed: {
		disableSearchBar: function() {
			return (
				this.language.checked === true ||
				this.framework.checked === true ||
				this.frontend.checked === true ||
				this.backend.checked === true ||
				this.mobile.checked === true ||
				this.web.checked === true ||
				this.hybrid.checked === true ||
				this.database.checked === true
			);
		},
		emptySearchBar: function() {
			if (this.disableSearchBar) {
				this.search = '';
			}
		},
		selectedFilters: function() {
			let filters = [];
			if (this.language.checked) {
				filters.push(this.language.value);
			}
			if (this.framework.checked) {
				filters.push(this.framework.value);
			}
			if (this.frontend.checked) {
				filters.push(this.frontend.value);
			}
			if (this.backend.checked) {
				filters.push(this.backend.value);
			}
			if (this.mobile.checked) {
				filters.push(this.mobile.value);
			}
			if (this.web.checked) {
				filters.push(this.web.value);
			}
			if (this.hybrid.checked) {
				filters.push(this.hybrid.value);
			}
			if (this.database.checked) {
				filters.push(this.database.value);
			}
			return filters;
		}
	},
	data() {
		return {
			data,
			filteredData: [],
			search: '',
			language: {
				checked: false,
				value: 'language'
			},
			framework: {
				checked: false,
				value: 'framework'
			},
			frontend: {
				checked: false,
				value: 'frontend'
			},
			backend: {
				checked: false,
				value: 'backend'
			},
			mobile: {
				checked: false,
				value: 'mobile'
			},
			web: {
				checked: false,
				value: 'web'
			},
			hybrid: {
				checked: false,
				value: 'hybrid'
			},
			database: {
				checked: false,
				value: 'database'
			}
		};
	},
	methods: {
		getfilteredData: function() {
			if (this.search !== '') {
				this.filteredData = data.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
			} else if (this.selectedFilters.length > 0) {
				this.filteredData = data.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
			} else {
				this.filteredData = data;
			}
		}
	},
	mounted() {
		this.getfilteredData();
	}
};
</script>
