import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.style.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  private hello: string = "Hello World";
}



































// import {Component} from '@angular/core';
// //import {ViewEncapsulation} from '@angular/core';
//
// @Component({
//   selector: 'my-app',
//   templateUrl:'app/app.html',
//   styleUrls: ['app/app.style.css'],
//   //encapsulation: ViewEncapsulation.Native
// })
// export class AppComponent {
//   private angular: string = "Angular";
// }
