import { Component } from '@angular/core';
import {
  faBlog, faCalendar,
  faFolder, faRocket,
  faTrophy, faUser
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  faCalendar = faCalendar;
  faFolder = faFolder;
  faTrophy = faTrophy;
  faBlog = faBlog;
  faUser = faUser;
  faRocket = faRocket;
  constructor(
  ) { }
}
