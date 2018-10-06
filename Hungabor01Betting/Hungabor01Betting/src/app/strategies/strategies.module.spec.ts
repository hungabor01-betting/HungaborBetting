import { StrategiesModule } from './strategies.module';

describe('StrategiesModule', () => {
  let strategiesModule: StrategiesModule;

  beforeEach(() => {
    strategiesModule = new StrategiesModule();
  });

  it('should create an instance', () => {
    expect(strategiesModule).toBeTruthy();
  });
});
