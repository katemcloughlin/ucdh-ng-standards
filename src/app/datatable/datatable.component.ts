import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'courseCode', 'courseName', 'period', 'length', 'localAway', 'openTo', 'seats', 'published', 'action'];
  dataSource = new MatTableDataSource<TestData>(ELEMENT_DATA);
  selection = new SelectionModel<TestData>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}


export interface TestData {
  id: string;
  courseCode: string;
  courseName: string;
  period: string;
  length: string;
  localAway: string;
  openTo: string;
  seats: string;
  published: string;
}

const ELEMENT_DATA: TestData[] = [  
  {  
    id:"1", 
    courseCode: "IMD 461",
    courseName: "Mather VA Internal Medicine Acting Internship",
    period:"06/12/2017 - 07/07/2017",
    length:"4 weeks",
    localAway: "Away",
    openTo: "M4",
    seats: "15",
    published:"In Use"
  },
  {  
    id:"2", 
    courseCode: "IMD 461",
    courseName: "Mather VA Internal Medicine Acting Internship",
    period:"06/12/2017 - 07/07/2017",
    length:"4 weeks",
    localAway: "Away",
    openTo: "M4",
    seats: "15",
    published:"In Use"
  },
  {  
    id:"3", 
    courseCode: "IMD 461",
    courseName: "Mather VA Internal Medicine Acting Internship",
    period:"06/12/2017 - 07/07/2017",
    length:"4 weeks",
    localAway: "Away",
    openTo: "M4",
    seats: "15",
    published:"In Use"
  },
  {  
    id:"4", 
    courseCode: "IMD 461",
    courseName: "Mather VA Internal Medicine Acting Internship",
    period:"06/12/2017 - 07/07/2017",
    length:"4 weeks",
    localAway: "Away",
    openTo: "M4",
    seats: "15",
    published:"In Use"
  },
  {  
    id:"5", 
    courseCode: "IMD 461",
    courseName: "Mather VA Internal Medicine Acting Internship",
    period:"06/12/2017 - 07/07/2017",
    length:"4 weeks",
    localAway: "Away",
    openTo: "M4",
    seats: "15",
    published:"In Use"
  }  
];

