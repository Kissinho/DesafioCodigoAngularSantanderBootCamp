import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any

  constructor(private service: ProductListService) { 
  
  }

  ngOnInit(): void {
    this.livros = this.service.getBook().subscribe(data =>{
      this.livros = data
      console.log(this.livros)
    })
  }

}
