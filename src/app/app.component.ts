import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { Subscription } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { ThemeService } from './shared/services/theme.service';
import { FullscreenService } from './shared/services/fullscreen.service';
import { InactivityService } from './shared/services/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Frontend_Novalink';
  currentTheme = 'light';
  isFullscreen = false;

  private themeSub!: Subscription;
  private fullscreenSub!: Subscription;
  constructor(
    private inactivityService: InactivityService,
    private primeng: PrimeNG,
    private fullscreenService: FullscreenService,
    private themeService: ThemeService,
    private authService: AuthService,
  ) {
  }


  ngOnInit(): void {


    this.primeng.ripple.set(true);
    this.inactivityService.startWatching();
    this.themeSub = this.themeService.theme$.subscribe(tema => {
      this.currentTheme = tema;
      this.themeService.setTheme('aura');
    });
    this.fullscreenSub = this.fullscreenService.isFullscreen$.subscribe(state => {
      this.isFullscreen = state;
    });
  }

  ngOnDestroy(): void {
    this.inactivityService.stopWatching();
    if (this.themeSub) { this.themeSub.unsubscribe(); }
    if (this.fullscreenSub) { this.fullscreenSub.unsubscribe(); }
  }
}
