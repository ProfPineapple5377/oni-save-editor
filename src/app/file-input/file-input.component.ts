import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  file: File|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(e : Event){
    console.log(e)
    console.log(e.target)
    const target = e.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    console.log(this.file)
  }
}
