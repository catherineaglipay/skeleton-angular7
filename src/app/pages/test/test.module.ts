import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TestComponent } from "./test.component";

const TEST_ROUTE = [{ path: '', component: TestComponent }];

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TEST_ROUTE)
  ]
})
export class TestModule { }
