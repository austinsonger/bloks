/* bloks engine: routing */

// Page (Tab) Template
Vue.component('tab', {
  props: ['name'],
  template: `<div class="tab-pane fade" role="tabpanel" :id="name"
    :aria-labelledby="name + 'Link'"><slot></slot></div>`
});

// Page Links For Sidebar
Vue.component('tab-link', {
  props: ['to'],
  template: `<a :href="'#' + to" :id="to + 'Link'" class="nav-link" data-toggle="pill" aria-selected="false" :aria-controls="'#' + to"><slot></slot></a>`
});

// Page Buttons For Use Anywhere
Vue.component('tab-button', {
  props: ['to', 'align'],
  methods: { tab: function(tab) { $('#'+tab+'Link').tab('show'); } },
  template: `<a href="#" @click="tab(to)" :class="{ 'btn btn-primary mt-3': 1, 'float-left': align == 'left', 'float-right': align == 'right' }"><slot></slot></a>`
});