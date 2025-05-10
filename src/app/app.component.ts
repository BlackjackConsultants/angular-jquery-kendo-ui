import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
// import '@progress/kendo-ui/js/kendo.all.min.js';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }

  createButton() {

    setTimeout(() => {
      const data = [
        { id: 1, name: 'Jorge' },
        { id: 2, name: 'Melissa' },
        { id: 3, name: 'Adrian' }
      ];
      // @ts-ignore
      $('#dropdown').kendoDropDownList({
        optionLabel: " ", // 👈 This shows a blank line
        dataTextField: "name",
        dataValueField: "id",
        dataSource: data
      });
    }, 0);
  }
}
