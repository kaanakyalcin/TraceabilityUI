import { filter, map, skip } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {OnInit, Component, Input} from '@angular/core';
import { Trace } from '../../Trace';
import { TraceService } from '../../services/trace.service';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent implements OnInit {
  @Input() trace: Trace;
  
  constructor(private traceService : TraceService, private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
    //this.traceService.getTrace().subscribe(res => (this.trace = res));
  }

}
