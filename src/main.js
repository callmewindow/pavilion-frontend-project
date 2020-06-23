// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Button } from 'vant';
import { Field } from 'vant';
import { Toast } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Switch } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { Picker } from 'vant';
import { Stepper } from 'vant';
import { Notify } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Popup } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { ActionSheet } from 'vant';
import { Image } from 'vant';
import { DatetimePicker } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(DatetimePicker);
Vue.use(Image);
Vue.use(ActionSheet);
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Popup);
Vue.use(Grid).use(GridItem);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Notify);
Vue.use(Stepper);
Vue.use(Picker);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Switch);
Vue.use(Cell).use(CellGroup);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Button);

Vue.use(VueAxios,axios);
Vue.use(VueCookies)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
