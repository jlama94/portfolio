import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// runs the AppModule and all of its information.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
