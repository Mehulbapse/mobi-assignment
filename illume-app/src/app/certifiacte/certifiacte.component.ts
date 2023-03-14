import { Component, Input, OnInit } from '@angular/core';
import { IllumeServiceService } from '../services/illume-service.service';

@Component({
  selector: 'app-certifiacte',
  templateUrl: './certifiacte.component.html',
  styleUrls: ['./certifiacte.component.scss'],
})
export class CertifiacteComponent implements OnInit {
  valuefilter: any;
  pendingArray: any = [];
  approvedArray: any = [];
  name: string = 'Mehul';
  array: any = [];
  images: any;
  responsiveOptions;
  certifiacteArray: String[] = [];
  // serachedValue: any;
  interval: any;

  @Input() serachedValue :any
  constructor(
    private service: IllumeServiceService,
    
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3,
      },
    ];
  }
 
  ngOnInit(): void {
    this.service.getData().subscribe((response: any) => {
      if (response) {
        const array = response.data.certificates;
        this.certifiacteArray = array
          .filter((active: any) => active.isActive == 1)
          .map((filterObj: any) => filterObj.thumbnail);
        this.fetch();
        this.fetchApprovedandPending(response.data);
      }
    });

   
  }

  fetch() {
    Promise.all(this.certifiacteArray.map((url: any) => fetch(url)))
      .then((responses: any) => {
        return Promise.all(
          responses.map((res: Response) => res.arrayBuffer())
        ).then((buffers) => {
          return buffers.map((buffer) => this.arrayBufferToBase64(buffer));
        });
      })
      .then((imagesAsBase64: any) => {
        this.array.push(imagesAsBase64);
        window.console.log(imagesAsBase64);
      });
  }

  private arrayBufferToBase64(buffer: any) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b: any) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  fetchApprovedandPending(array: any) {
    this.pendingArray = array.testimonials.filter(
      (obj: any) => obj.status == 'pending'
    );
    this.approvedArray = array.testimonials.filter(
      (obj: any) => obj.status == 'approved'
    );
  }

  onPendingAccept(id: Number) {
    console.log(id);
    this.approvedArray.push(
      this.pendingArray.find((val: any) => val.id === id)
    );
    this.pendingArray = this.pendingArray.filter((val: any) => val.id != id);
  }

  onPendingReject(id) {
    this.pendingArray = this.pendingArray.filter((val: any) => val.id != id);
  }

  
}
