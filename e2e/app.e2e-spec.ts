import { TemperatureMonitorPage } from './app.po';

describe('temperature-monitor App', function() {
  let page: TemperatureMonitorPage;

  beforeEach(() => {
    page = new TemperatureMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
