import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-node',
  templateUrl: './node.page.html',
  styleUrls: ['./node.page.scss'],
})
export class NodePage implements OnInit {
  node: any;
  nid: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.nid = params.id;
      console.log(this.nid);
      this.httpService.get(`node/${this.nid}`).subscribe((res) => {
        console.log(res[0]);
        this.node = res[0];
      });
    });
  }
}
