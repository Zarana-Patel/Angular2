import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  /* Component Property Binding : By using @Input decorator - We can expose element property to other component
     user @Input('srvElement') - Give different name to expose the element  Here I gave srvElement Name
     so now It can expose as srvElement not as element(It is called Alias to for to expose the property) */
  @Input() element: {type: string, name: string};
  constructor() { }

  ngOnInit() {
  }

}
