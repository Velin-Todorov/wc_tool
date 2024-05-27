export class WcContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  async executeStrategy(wcTool) {
    await this.strategy.execute(wcTool);
  }
}
