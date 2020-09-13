import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";
// import * as firebase from "firebase/app";
// import "firebase/auth";

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
