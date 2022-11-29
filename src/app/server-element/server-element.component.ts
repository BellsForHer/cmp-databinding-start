import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef; 

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges (changes: SimpleChanges) {
    console.log ('ngOnChanges called!')
    console.log ('SimpleChanges called!')
   }

  ngOnInit() {
    console.log('ngOnInit called!')
    console.log('Text Content' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
      console.log ('ngDoCheck Called!');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInIt called!')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInIt called!')
    console.log('Text Content' + this.header.nativeElement.textContent);
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!')
}

ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
}
}
