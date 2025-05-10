import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('#myButton').click(() => {
      alert('jQuery click event triggered!');
    });
  }
}
