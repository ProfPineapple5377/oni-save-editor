import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-editor',
  templateUrl: './save-editor.component.html',
  styleUrls: ['./save-editor.component.scss']
})
export class SaveEditorComponent implements OnInit {
  file = null;
  constructor() {
   }

  ngOnInit(): void {
  }

}
