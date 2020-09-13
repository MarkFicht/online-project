import { Vue } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class Dashboard extends Vue {
  private isLoggedIn = false;
  private currentUser = false;

  async onLogout(event: Event): Promise<void> {
    console.log("work?");

    await firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push("/login");
      })
      .catch((err) => {
        alert(err);
      });

    event.preventDefault();
  }
}
