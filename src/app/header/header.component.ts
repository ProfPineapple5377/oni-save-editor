import { Component, OnInit } from '@angular/core';
import { FileHandlerComponent } from 'src/app/file-handler/file-handler.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(e : Event){
    const target = e.target as HTMLInputElement;
    var file = (target.files as FileList)[0];
    FileHandlerComponent.setFile(file)
  }
}
