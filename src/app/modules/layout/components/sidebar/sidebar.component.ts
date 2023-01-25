import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu.model';
import { StorageService } from 'src/app/core/services/StorageService';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ACCESS_TOKEN, ACCESS_TOKEN_CAMEL_CASE, ROLE_LABEL, USER_LABEL } from 'src/app/core/utils/Constants';
import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;

  constructor(
    public themeService: ThemeService,
    private menuService: MenuService,
    private routerService: Router,
    private storageService: StorageService,
  ) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
  onSignOut() {
    localStorage.removeItem(USER_LABEL);
    localStorage.removeItem(ACCESS_TOKEN_CAMEL_CASE);
    localStorage.removeItem(ROLE_LABEL);
    this.routerService.navigate(['/auth']);
  }
}
