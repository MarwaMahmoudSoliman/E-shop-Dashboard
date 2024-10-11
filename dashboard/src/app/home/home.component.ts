// import { Component } from '@angular/core';
// import { HeroComponent } from "../hero/hero.component";

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [HeroComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }
import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SidebarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isSidebarHidden = true;


  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  logout() {
  
  }
}
