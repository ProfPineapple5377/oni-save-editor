import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEditorComponent } from './save-editor.component';

describe('SaveEditorComponent', () => {
  let component: SaveEditorComponent;
  let fixture: ComponentFixture<SaveEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
