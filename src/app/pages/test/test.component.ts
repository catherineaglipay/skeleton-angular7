import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../base-component";
import Swal from 'sweetalert2'
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends BaseComponent implements OnInit {

    global_var = this.test_global_var
    global_func = this.testGlobalFunction()
    local_current_date = moment().format("YYYY-MM-DD")

    constructor() {
        super();
    }

    ngOnInit() {
        console.log("global var test: ", this.global_var)
        console.log("global func test: ", this.global_func)
        console.log("global current date: ", this.GLOBAL_CURRENT_DATE)
        console.log("local current date: ", this.local_current_date)
    }

    testSwal() {
        Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

}
