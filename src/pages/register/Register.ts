import { Options, Vue } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class Register extends Vue {
  private email = "";
  private password = "";
  private error = "";

  async onRegister(event: Event): Promise<void> {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        (user) => {
          alert(`Account created for ${user.user?.email}`);
          this.$router.push("/");
        },
        (error) => {
          alert(error.message);
        }
      );

    event.preventDefault();
  }
}
