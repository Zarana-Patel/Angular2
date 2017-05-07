import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styleUrls: ['./testserver.component.css']
})
export class TestserverComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverType: string}>();
  ServerName = '';
  ServerType = ''
  onAddServer(){
    this.serverCreated.emit({
      serverName : this.ServerName,
      serverType : this.ServerType
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
