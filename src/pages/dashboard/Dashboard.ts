import { Vue, Options } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";
import { GameName } from "../../enums/GameName";

import VanillaTilt from "vanilla-tilt";

@Options({
  mounted(): void {
    VanillaTilt.init(this.$refs.tileContainer1, { speed: 1500 });
    VanillaTilt.init(this.$refs.tileContainer2, { speed: 1500 });
    VanillaTilt.init(this.$refs.tileContainer3, { speed: 1500 });
    VanillaTilt.init(this.$refs.tileContainer4, { speed: 1500 });
    VanillaTilt.init(this.$refs.tileContainer5, { speed: 1500 });
    VanillaTilt.init(this.$refs.tileContainer6, { speed: 1500 });
  },
})
export default class Dashboard extends Vue {
  private isLoggedIn = false;
  private currentUser = false;

  // mounted(): void {
  //   // VanillaTilt.init(this.$refs.tileContainer);
  // }

  // ---
  onPlay(event: Event, gameName: string): void {
    console.log("work?", event, gameName);

    // TO DO - Check status game in ifs
    // TO DO - Redirect to selected game, if can
    // TO DO - Prepare endpoints
    // TO DO -

    if (gameName === GameName.QUATRO) {
      console.log("%c redirect QUATRO -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.CARCASSONE) {
      console.log("%c redirect CARcas -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.MONOPOLY) {
      console.log("%c redirect MONO -> ", "background: #222; color: #bada55");
    } else {
      console.log(
        "%c ERROR with gameName -> ",
        "background: #222; color: tomato"
      );
    }
  }

  // ---
  onShowDesc(event: Event, gameName: string): void {
    console.log("work?", event, gameName);

    if (gameName === GameName.QUATRO) {
      console.log("%c desc QUATRO -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.CARCASSONE) {
      console.log("%c desc CARcas -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.MONOPOLY) {
      console.log("%c desc MONO -> ", "background: #222; color: #bada55");
    } else {
      console.log(
        "%c ERROR with gameName -> ",
        "background: #222; color: tomato"
      );
    }
  }

  // ---
  async onLogout(event: Event): Promise<void> {
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
