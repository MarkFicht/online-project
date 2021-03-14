import { Vue, Options } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";
import { GameName } from "@/enums/GameName";
import { GameStatus } from "@/enums/GameStatus";

import GameTile from "./game-tile/GameTile.vue";

@Options({
  components: {
    GameTile,
  },
  mounted(): void {},
})
export default class Dashboard extends Vue {
  private isLoggedIn = false;
  private currentUser = false;

  private gameName = GameName;
  //  Temp var -> store soon
  private gameStatus = GameStatus;

  // ---
  onPlay(event: Event, gameName: string): void {
    // TO DO - Check status game in ifs
    // TO DO - Redirect to selected game, if can
    // TO DO - Prepare endpoints
    // TO DO - Add toggle button for active colors on background

    // TO DO - Create activeToken ( checking user, disconnec user, left user, etc.. )
    // TO DO - Store for current state in game ( if user back after disconnect ), current user, etc

    // TO DO - Add watch to package.json and npm start

    // TO DO -
    if (gameName === GameName.QUATRO) {
      console.log("%c redirect QUATRO -> ", "background: #222; color: #bada55");
      // TO DO - Remove temp
      this.$router.push("/quatro/game");
    } else if (gameName === GameName.CARCASSONE) {
      console.log("%c redirect CARcas -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.MONOPOLY) {
      console.log("%c redirect MONO -> ", "background: #222; color: #bada55");
    } else {
      console.log("%c ERROR gameName -> ", "background: #222; color: tomato");
    }
  }

  onShowDesc(event: Event, gameName: string): void {
    if (gameName === GameName.QUATRO) {
      console.log("%c desc QUATRO -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.CARCASSONE) {
      console.log("%c desc CARcas -> ", "background: #222; color: #bada55");
    } else if (gameName === GameName.MONOPOLY) {
      console.log("%c desc MONO -> ", "background: #222; color: #bada55");
    } else {
      console.log("%c ERROR gameName -> ", "background: #222; color: tomato");
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
