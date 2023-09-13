import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {

  listView: any
  items: any[] = [];
  currentLenth = 50;

  constructor(private data: GetDataService) { }

  ngOnInit(): void {

    // // This code will run when the component is initialized.
    this.data.callData().subscribe(
      (res) => {
        this.listView = res;
        this.items = this.listView.items.slice(0, this.currentLenth);
      });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;


    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
      // alert("window.innerHeight " + window.innerHeight + " window.scrollY " + window.scrollY + "\n document.body.offsetHeight " + document.body.offsetHeight)
      this.items = this.items.concat(this.listView.items.slice(this.currentLenth + 1, this.currentLenth + 50))
      this.currentLenth += 50;
    }


  }

}
