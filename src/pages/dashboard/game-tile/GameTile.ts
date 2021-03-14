import { Vue, Options, Prop } from "vue-property-decorator";

import VanillaTilt from "vanilla-tilt";

@Options({})
export default class GameTile extends Vue {
  // @Prop() exampleProperty!: string;
  // @Prop(String) exampleProperty: string | undefined;
  @Prop({ required: true }) gameTitle!: string;
  @Prop(String) readonly status: string | undefined;

  // ---
  mounted(): void {
    VanillaTilt.init(this.$refs.tileContainer, { speed: 1500 });
  }

  onPlay(event: Event): void {
    this.$emit("onPlay", event, this.gameTitle);
  }

  onShowDesc(event: Event): void {
    this.$emit("onShowDesc", event, this.gameTitle);
  }
}
