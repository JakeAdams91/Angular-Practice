import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  width: number;
  constructor() { }

  // ::Tracks mouse position vs size of progress bar::
  // get size of Window - size of ProgressBar / 2 : gives margin (px) of one side of the progress bar
  // get mouse clientX - margin(barWindowDiff) : this gives mouse position reletive to progress bar,
  //  from there we can get accurate %'s to display on bar, regardless of screen size or resolution.
  trackMouse(move): void {
    const windoWidth: number = window.innerWidth;
    const el = document.getElementById('progress');
    const barSize: number = el.clientWidth;
    const barWindowDiff: number = (windoWidth - barSize) / 2;
    const mousePosition: number = move.clientX - barWindowDiff;
    let progressPercent: number = (mousePosition / barSize) * 100;
    progressPercent = Math.floor(progressPercent);
    this.width = progressPercent;
  }

  updateColor(): string {
    let progBarClasses: string;
    if (this.width <= 25) {
      progBarClasses = 'progress-bar bg-success';
    } else if (this.width > 25 && this.width <= 50) {
      progBarClasses = 'progress-bar bg-info';
    } else if (this.width > 50 && this.width <= 75) {
      progBarClasses = 'progress-bar bg-warning';
    } else {
      progBarClasses = 'progress-bar bg-danger';
    }
    return progBarClasses;
  }

  ngOnInit() {

  }

}
