import { Vue, Options } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";

import VanillaTilt from "vanilla-tilt";
@Options({
  mounted(): void {
    VanillaTilt.init(this.$refs.loginContainer, { speed: 1500 });
  },
})
export default class Login extends Vue {
  private email = "";
  private password = "";

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
