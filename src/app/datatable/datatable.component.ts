import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, AfterViewChecked {
  displayedColumns: string[] = ['select', 'courseCode', 'courseName', 'period', 'length', 'published', 'action'];
  dataSource = new MatTableDataSource<TestData>(ELEMENT_DATA);
  selection = new SelectionModel<TestData>(true, []);
  length = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  allReplacement = 54321;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

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
    this.paginator._intl.itemsPerPageLabel = 'Display Results:';
  }

  ngAfterViewChecked() {
    /**
     * Assign the mat-option-# for the "All" replacement to a variable for re-use
     *
     * The "#" in "mat-option-#" is determined by the index of the this.allReplacement
     * variable location in the numeric array returned by the getPageSizeOptions()
     * method.
     */
    // const matOption = document.getElementById('mat-option-2');
    const matOptions = document.querySelectorAll('mat-option');

    // If the replacement element was found...
    if (matOptions) {
      const matOptionsLen = matOptions.length;
      for (let i = matOptionsLen - 1; i >= 0; i--) {
        const matOption = matOptions[i];

        // Store the span in a variable for re-use
        const span = matOption.querySelector('span.mat-option-text');
        // If the spans innerHTML string value is the same as the allReplacement variables string value...
        if ('' + span.innerHTML === '' + this.allReplacement) {
          // Change the span text to "All"
          span.innerHTML = 'All';
          break;
        }
      }
    }
  }

  getPageSizeOptions() {
    return [10, 25, this.allReplacement];
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

