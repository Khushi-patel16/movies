import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;


// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// 
// if (environment.production) {
//   enableProdMode();
// }
// 
// export { renderModule, renderModuleFactory } from '@angular/platform-server';
// 
// bootstrapApplication(AppComponent)
//   .catch(err => console.error(err));
// 
// 