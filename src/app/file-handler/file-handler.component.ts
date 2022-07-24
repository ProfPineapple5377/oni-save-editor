import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-handler',
  templateUrl: './file-handler.component.html',
  styleUrls: ['./file-handler.component.scss']
})
export class FileHandlerComponent implements OnInit {
  file: File|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  setFile(f: File){
    console.log(f);
    this.file = f;
  }

}
