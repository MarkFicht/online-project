import { Vue, Options } from "vue-class-component";
import anime from "animejs";

@Options({
  mounted(): void {
    this.animeBackground();
  },
})
export default class BackgroundAnime extends Vue {
  animeBackground(): void {
    anime({
      targets: ".background-anime-cube",
      translateX: function() {
        return anime.random(-1150, 1150);
      },
      translateY: function() {
        return anime.random(-800, 800);
      },
      scale: function() {
        return anime.random(1, 5);
      },
      easing: "linear",
      duration: 4000,
      delay: anime.stagger(20),
      complete: this.animeBackground,
    });
  }
}
