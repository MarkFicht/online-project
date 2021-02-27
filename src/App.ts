import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
// import * as firebase from "firebase/app";
// import "firebase/auth";

@Options({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
