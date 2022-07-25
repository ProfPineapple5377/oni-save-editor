import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-handler',
  templateUrl: './file-handler.component.html',
  styleUrls: ['./file-handler.component.scss']
})
export class FileHandlerComponent {
  static file: File|null = null;
  constructor() { }

  setFile(f: File){
    FileHandlerComponent.setFile(f);
  }

  static setFile(f: File){
    console.log(f);
    FileHandlerComponent.file = f;
  }

  getFile(): File|null{
    return FileHandlerComponent.getFile()
  }

  static getFile(): File|null{
    return FileHandlerComponent.file;
  } 

}
