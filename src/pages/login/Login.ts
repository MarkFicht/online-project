import { Vue } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class Login extends Vue {
  private email = "";
  private password = "";
  private error = "";

  async onLogin(event: Event): Promise<void> {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        (user) => {
          alert(`You are logged in as ${user.user?.email}`);
          this.$router.push("/");
        },
        (error) => {
          alert(error.message);
        }
      );

    event.preventDefault();
  }
}
