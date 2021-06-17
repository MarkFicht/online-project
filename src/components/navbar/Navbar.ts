import { Vue } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class Navbar extends Vue {
  private isLoggedIn = false;
  private currentUser: firebase.User | null = null;

  created(): void {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;
    }
  }

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
