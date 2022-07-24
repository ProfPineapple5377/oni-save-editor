import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-editor',
  templateUrl: './save-editor.component.html',
  styleUrls: ['./save-editor.component.scss']
})
export class SaveEditorComponent implements OnInit {
  file: File|null = null;
  constructor() {
  }

  ngOnInit(): void {
  }

  setFile(f: File){
    console.log(f);
    this.file = f;
  }

}
