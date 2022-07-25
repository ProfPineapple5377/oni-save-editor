import { Component, OnInit, Input } from '@angular/core';
import { FileHandlerComponent } from 'src/app/file-handler/file-handler.component';

@Component({
  selector: 'app-save-editor',
  templateUrl: './save-editor.component.html',
  styleUrls: ['./save-editor.component.scss']
})
export class SaveEditorComponent implements OnInit {
  fileHandler: FileHandlerComponent;
  constructor() {
    this.fileHandler = new FileHandlerComponent;
  }

  ngOnInit(): void {
  }
}
