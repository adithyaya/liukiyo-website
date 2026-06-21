// src/canvas/GardenCanvas.ts
import * as PIXI from "pixi.js";

type FlowerSprite = PIXI.Sprite & { swaySeed: number };
type FloatingParticle = PIXI.Graphics & { speed: number; drift: number };

export default class GardenCanvas {
  private app!: PIXI.Application;
  private container: HTMLElement;
  private meadowUrl: string;
  private flowers: FlowerSprite[] = [];
  private particles: FloatingParticle[] = [];
  private frame = 0;

  constructor(container: HTMLElement, meadowUrl: string) {
    this.container = container;
    this.meadowUrl = meadowUrl;
  }

  async init() {
    this.app = new PIXI.Application();

    await this.app.init({
      resizeTo: this.container,
      backgroundAlpha: 0,
      antialias: true,
      powerPreference: "high-performance",
    });

    this.container.appendChild(this.app.canvas);

    const texture = await PIXI.Assets.load(this.meadowUrl);

    const bg = new PIXI.Sprite(texture);
    bg.width = this.app.screen.width;
    bg.height = this.app.screen.height;
    this.app.stage.addChild(bg);

    this.createFlowerClusters(texture);
    this.createParticles();

    this.app.ticker.add(() => this.animate());
  }

  private createFlowerClusters(texture: PIXI.Texture) {
    const positions = [
      [120, 620],
      [330, 690],
      [520, 580],
      [760, 720],
      [900, 610],
    ];

    positions.forEach(([x, y], index) => {
      const flower = new PIXI.Sprite(texture) as FlowerSprite;

      flower.anchor.set(0.5, 1);
      flower.x = x;
      flower.y = y;
      flower.width = 160;
      flower.height = 180;
      flower.alpha = 0.32;

      flower.filters = [
        new PIXI.ColorMatrixFilter(),
      ];

      flower.eventMode = "none";
      flower.rotation = 0;

      flower.swaySeed = Math.random() * 10 + index;

      this.flowers.push(flower);
      this.app.stage.addChild(flower);
    });
  }

  private createParticles() {
    for (let i = 0; i < 34; i++) {
      const p = new PIXI.Graphics() as FloatingParticle;

      p.circle(0, 0, Math.random() * 2 + 1);
      p.fill({ color: 0xffffff, alpha: 0.28 });

      p.x = Math.random() * this.app.screen.width;
      p.y = Math.random() * this.app.screen.height;

      p.speed = Math.random() * 0.25 + 0.08;
      p.drift = Math.random() * 0.45 + 0.1;

      this.particles.push(p);
      this.app.stage.addChild(p);
    }
  }

  private animate() {
    this.frame += 0.016;

    this.flowers.forEach((flower, i) => {
      const wave = Math.sin(this.frame * 1.2 + flower.swaySeed);
      flower.rotation = wave * 0.025;
      flower.x += Math.sin(this.frame + i) * 0.035;
    });

    this.particles.forEach((p) => {
      p.y -= p.speed;
      p.x += Math.sin(this.frame * 0.8 + p.y * 0.01) * p.drift;

      if (p.y < -10) {
        p.y = this.app.screen.height + 10;
        p.x = Math.random() * this.app.screen.width;
      }
    });
  }

  destroy() {
  try {
    this.app?.ticker?.stop();

    if (this.app?.canvas?.parentNode) {
      this.app.canvas.parentNode.removeChild(this.app.canvas);
    }

    this.app?.destroy(false);
  } catch (error) {
    console.warn("Pixi cleanup skipped:", error);
  }
}
}
