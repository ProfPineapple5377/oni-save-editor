import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Output() inputFileEvent = new EventEmitter<File>();
  file: File|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(e : Event){
    const target = e.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    this.inputFileEvent.emit(this.file)
  }
}
