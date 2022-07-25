import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-handler',
  templateUrl: './file-handler.component.html',
  styleUrls: ['./file-handler.component.scss']
})
export class FileHandlerComponent implements OnInit{
  static file: File|null = null;
  static isParsing: boolean = false;
  constructor() { }
  ngOnInit(): void {
    
  }

  setFile(f: File){
    FileHandlerComponent.setFile(f);
  }

  static setFile(f: File){
    console.log(f);
    FileHandlerComponent.file = f;
    // call parser
  }

  getFile(): File|null{
    return FileHandlerComponent.getFile()
  }

  static getFile(): File|null{
    return FileHandlerComponent.file;
  } 

  parseFile(){
    var file = this.getFile();
    if (file != null){
      FileHandlerComponent.parseFile(file);
    } else {
      console.warn("File needs to be not null.")
    }
  }

  static parseFile(f: File){
    //used for loading animation
    FileHandlerComponent.isParsing = true;

    //end of parse
    FileHandlerComponent.isParsing = false;
  }


}
