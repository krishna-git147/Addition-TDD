import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { error } from '@angular/compiler/src/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="check"]')).toBeTruthy();
  });
  it('should return zeroif value is empty', () => {
   let result= component.sum("");
    expect(result).toEqual(0);
  });
    
  it('should return same value if one alue is given number', () => {
   let result= component.sum("3");
    expect(result).toEqual(3);
  });
  it('should return addedvalue when given two values separated bycomma', () => {
    let result= component.sum("3,12");
     expect(result).toEqual(15);
   });
   it('should return addedvalue when given deliminator as nextlie', () => {
    let result= component.sum("3\n12");
     expect(result).toEqual(15);
   });
   it('should return addedvalue when given three numbers delimited by both ways', () => {
    let result= component.sum("3,12,6");
     expect(result).toEqual(21);
   });
   it('should return addedvalue when given three numbers delimited by both ways', () => {
    let result= component.sum("3\n12\n6");
     expect(result).toEqual(21);
   });
   var throwerror=function(){
    throw new Error();
   };
   it('should return exception when negatives given', function() {
     //fixture.detectChanges()).throw new Error("");
     //(new Error)
    let result= component.sum("-3");
    console.log("reslut s: "+result);
    //expect( ())=>component.sum("-3")).toThrow("negatives not allowed");
    expect(function(){component.sum("-3");}).toThrow();
  // expect(component.sum("-3")).toThrow();
   //Error("negatives not allowed");
    // expect(function(){
       
  //   }).toThrow("negatives not allowed");
  });
   
});
