<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HomeNew />
    <EventComponent />
    <TwoWayBinding />
    <InputValue />
    <RadioCheckboxValue />
    <IfelseConditional />
    <ForLoop />
    <ParentComponent />
    <ReuseComponent />
    <HtmlBinding />
    <CssBinding />
    <ParentPropComponent />
    <RefComponent />
    <SimpleForm />
    <ComputedProperty />
    <WatchComponent />
    <SlotParent />
    <MultiSlotName />
    <DynamicHome />
    <teleport to="#footer">
        <Footer />
    </teleport>
    <CreatedbeforeCreate />
    <MountedBeforeMount />
    <UserApi />
    <PostApi />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeNew from './components/HomeNew.vue';
import EventComponent from './components/EventComponent.vue';
import TwoWayBinding from './components/TwoWayBinding.vue';
import InputValue from './components/InputValue.vue';
import RadioCheckboxValue from './components/RadioCheckboxValue.vue';
import IfelseConditional from './components/IfelseConditional.vue';
import ForLoop from './components/ForLoop.vue';
import ParentComponent from './components/ParentComponent.vue';
import ReuseComponent from './components/ReuseComponent.vue';
import HtmlBinding from './components/HtmlBinding.vue';
import CssBinding from './components/CssBinding.vue';
import ParentPropComponent from './components/Props/ParentPropComponent.vue';
import RefComponent from './components/Ref/RefComponent.vue';
import SimpleForm from './components/Form/SimpleForm.vue';
import ComputedProperty from './components/ComputedProperty/ComputedProperty.vue';
import WatchComponent from './components/Watcher/WatchComponent.vue';
import SlotParent from './components/Slots/SlotParent.vue';
import MultiSlotName from './components/Slots/MultiSlotName.vue';
import DynamicHome from './components/DynamicComponent/DynamicHome.vue';
import Footer from './components/Teleport/Footer.vue';
import CreatedbeforeCreate from './components/LifeCycle/CreatedbeforeCreate.vue';
import MountedBeforeMount from './components/LifeCycle/MountedBeforeMount.vue';
import UserApi from './components/API/UserApi.vue';
import PostApi from './components/API/PostApi.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        HomeNew,
        EventComponent,
        TwoWayBinding,
        InputValue,
        RadioCheckboxValue,
        IfelseConditional,
        ForLoop,
        ParentComponent,
        ReuseComponent,
        HtmlBinding,
        CssBinding,
        ParentPropComponent,
        RefComponent,
        SimpleForm,
        ComputedProperty,
        WatchComponent,
        SlotParent,
        MultiSlotName,
        DynamicHome,
        Footer,
        CreatedbeforeCreate,
        MountedBeforeMount,
        UserApi,
        PostApi
    }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
