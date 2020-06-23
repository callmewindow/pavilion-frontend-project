import Vue from 'vue'
import Router from 'vue-router'
import title from "./title"
import index from '../components/index'

import Adopt from "../components/visitor/Adopt"
import Visit from "../components/visitor/Visit"
import Enter from "../components/visitor/Enter"
import TeamAdd from "../components/visitor/TeamAdd"
import AdoptList from '../components/visitor/AdoptList'
import InputId from '../components/visitor/InputId'
import InformationModify from '../components/visitor/InformationModify'
import PersonalFunction from '../components/visitor/PersonalFunction'
import PersonalHome from '../components/visitor/PersonalHome'
import SecuritySetting from '../components/visitor/SecuritySetting'

import AllExhibition from '../components/controller/AllExhibition'
import ControllerEnter from '../components/controller/ControllerEnter'
import PavilionManagement from '../components/controller/PavilionManagement'
import PavilionOverview from '../components/controller/PavilionOverview'
import ControllerHome from '../components/controller/ControllerHome'
import ControllerFunction from '../components/controller/ControllerFunction'
import BoothManagement from '../components/controller/BoothManagement'
import ControllerAdd from '../components/controller/ControllerAdd'
import AllAdopt from '../components/controller/AllAdopt'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "index"
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/Adopt",
      name: "Adopt",
      component: Adopt
    },
    {
      path: "/Visit",
      name: "Visit",
      component: Visit
    },
    {
      path: "/Enter",
      name: "Enter",
      component: Enter
    },
    {
      path: "/TeamAdd",
      name: "TeamAdd",
      component: TeamAdd
    },
    {
      path: "/AdoptList",
      name: "AdoptList",
      component: AdoptList
    },
    {
      path: "/InputId",
      name: "InputId",
      component: InputId
    },
    {
      path: "/InformationModify",
      name: "InformationModify",
      component: InformationModify
    },
    {
      path: "/PersonalHome",
      name: "PersonalHome",
      component: PersonalHome
    },
    {
      path: "/PersonalFunction",
      name: "PersonalFunction",
      component: PersonalFunction
    },
    {
      path: "/SecuritySetting",
      name: "SecuritySetting",
      component: SecuritySetting
    },
    {
      path: "/AllExhibition",
      name: "AllExhibition",
      component: AllExhibition
    },
    {
      path: "/ControllerEnter",
      name: "ControllerEnter",
      component: ControllerEnter
    },
    {
      path: "/PavilionManagement",
      name: "PavilionManagement",
      component: PavilionManagement
    },
    {
      path: "/PavilionOverview",
      name: "PavilionOverview",
      component: PavilionOverview
    },
    {
      path: "/ControllerFunction",
      name: "ControllerFunction",
      component: ControllerFunction
    },
    {
      path: "/ControllerHome",
      name: "ControllerHome",
      component: ControllerHome
    },
    {
      path: "/BoothManagement",
      name: "BoothManagement",
      component: BoothManagement
    },
    {
      path: "/ControllerAdd",
      name: "ControllerAdd",
      component: ControllerAdd
    },
    {
      path: "/AllAdopt",
      name: "AllAdopt",
      component: AllAdopt
    },

  ]
});

router.afterEach((to) => {
  window.document.title = title[to.name];
});

export default router;
