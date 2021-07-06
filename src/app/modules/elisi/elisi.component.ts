import { Component, OnInit } from '@angular/core';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from './../../core/utilities/calendar';

@Component({
  selector: 'app-elisi',
  templateUrl: './elisi.component.html',
  styleUrls: ['./elisi.component.scss']
})
export class ElisiComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faBars = faBars;
  isMenuBarHidden: boolean = false;

  list: any[] = [{
     data: [{
       name: 'david',
       icon: 'gia'
     }],
     children: [{
       data: [{
         name: 'gio',
         icon: 'gio'
       },
       {
         name: 'mgeli',
         age: '25'
       }
      ],
       children: [{
         data: [{
           name: 'zura',
           age: '35'
         },
         {
          name: 'zura',
          age: '35'
        },
        {
          name: 'zura',
          age: '35'
        },
        {
          name: 'zura',
          age: '35'
        },
        {
          name: 'zura',
          age: '35'
        },
        {
          name: 'zura',
          age: '35'
        },
        {
          name: 'zura',
          age: '35'
        }],
       }]
     }]
  }];

  ngOnInit(): void {
    const calendar = new Calendar();
    console.log(calendar.getFirstDayOfMonth(2000,4));
  }

}
