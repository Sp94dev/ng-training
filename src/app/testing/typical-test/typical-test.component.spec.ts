import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TypicalComponent } from './typical-test.component';

describe('DeleteComponent', () => {
  let component: TypicalComponent;
  let fixture: ComponentFixture<TypicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypicalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const text = fixture.debugElement.query(By.css('p')).nativeElement
      .textContent;
    expect(text).toContain('Typical component works!');
  });
});
