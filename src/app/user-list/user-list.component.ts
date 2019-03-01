import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ViewChild } from '@angular/core';
import { FormGroup, FormControl, 
  Validators } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
declare interface User {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  dob:string;
}

export interface UserData {
  userId: string;
  userName:string;
  firstName: string;
  lastName: string;
  dob: string;
}


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchForm:FormGroup
  displayedColumns = ["userId","userName","firstName","lastName","dob","actions"]
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  
  constructor(private formBuilder:FormBuilder) {
    const users: UserData[] = [
      {userId:"001",userName:"meet001",firstName:"Meet",lastName:"Aghera",dob:"21-02-1995"},
    {userId:"002",userName:"meet002",firstName:"Rahul",lastName:"viragna",dob:"21-02-1995"},
    {userId:"003",userName:"meet003",firstName:"Rohan",lastName:"Agutra",dob:"21-02-1995"},
    {userId:"004",userName:"meet004",firstName:"Manish",lastName:"Minata",dob:"21-02-1995"},
    {userId:"005",userName:"meet005",firstName:"Mohan",lastName:"Rajvadi",dob:"21-02-1995"},
    {userId:"006",userName:"meet006",firstName:"Manoj",lastName:"Janesh",dob:"21-02-1995"},
    {userId:"007",userName:"meet007",firstName:"Mayur",lastName:"Jagdish",dob:"21-02-1995"},
    {userId:"008",userName:"meet008",firstName:"Ronak",lastName:"Jagul",dob:"21-02-1995"},
    {userId:"009",userName:"meet009",firstName:"Rajveer",lastName:"Janish",dob:"21-02-1995"},
    {userId:"010",userName:"meet010",firstName:"Taj",lastName:"joshan",dob:"21-02-1995"},
    {userId:"011",userName:"meet011",firstName:"Rajveer",lastName:"Ronita",dob:"21-02-1995"},
    {userId:"012",userName:"meet012",firstName:"Tajveer",lastName:"Rolly",dob:"21-02-1995"},
    {userId:"012",userName:"meet013",firstName:"Tajesh",lastName:"Rati",dob:"21-02-1995"},
    {userId:"013",userName:"meet014",firstName:"Ronak",lastName:"Bhagendre",dob:"21-02-1995"},
    {userId:"014",userName:"meet015",firstName:"Rohil",lastName:"Bhaji",dob:"21-02-1995"},
    {userId:"015",userName:"meet016",firstName:"Roshan",lastName:"Raji",dob:"21-02-1995"},
    {userId:"016",userName:"meet017",firstName:"Rathika",lastName:"Ronekswer",dob:"21-02-1995"},
    ];

    this.dataSource = new MatTableDataSource(users);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {

    this.searchForm=this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      ANumber:[''],
    })
  }


}
