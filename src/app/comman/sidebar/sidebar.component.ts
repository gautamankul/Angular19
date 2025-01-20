import { Component } from '@angular/core';


interface MenuItem {
  icon: string;
  title: string;
  children?: MenuItem[];
  expanded?: boolean;
}


@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  menuItems: MenuItem[] = [
    {
      icon: 'fa-window-maximize',
      title: 'Applications',
      children: [
        { icon: '', title: 'App 1' },
        { icon: '', title: 'App 2' }
      ]
    },
    {
      icon: 'fa-file',
      title: 'Pages',
      children: [
        { icon: '', title: 'Page 1' },
        { icon: '', title: 'Page 2' }
      ]
    },
    {
      icon: 'fa-book',
      title: 'Documentation',
      children: [
        { icon: '', title: 'Getting Started' },
        { icon: '', title: 'Components' }
      ]
    }
  ];

  toolItems: MenuItem[] = [
    {
      icon: 'fa-puzzle-piece',
      title: 'UI Elements',
      children: [
        { icon: '', title: 'Buttons' },
        { icon: '', title: 'Cards' }
      ]
    },
    {
      icon: 'fa-heart',
      title: 'Icons',
      children: [
        { icon: '', title: 'Font Awesome' },
        { icon: '', title: 'Material Icons' }
      ]
    },
    {
      icon: 'fa-wpforms',
      title: 'Forms',
      children: [
        { icon: '', title: 'Basic Forms' },
        { icon: '', title: 'Advanced Forms' }
      ]
    },
    {
      icon: 'fa-table',
      title: 'Tables',
      children: [
        { icon: '', title: 'Basic Tables' },
        { icon: '', title: 'Data Tables' }
      ]
    }
  ];

  toggleItem(item: MenuItem) {
    item.expanded = !item.expanded;
  }

}
