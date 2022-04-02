import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css'],
})
export class EditPromotionComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetPromotionForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  promotionForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private promotionApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.promotionApi.GetPromotion(id).subscribe((data) => {
      console.log(data.subjects);
      this.subjectArray = data.subjects;
      this.promotionForm = this.fb.group({
        name: [data.name, [Validators.required]],
        percent_discount: [data.percent_discount, [Validators.required]],
      });
    });
  }

  /* Reactive book form */
  updateBookForm() {
    this.promotionForm = this.fb.group({
      name: ['', [Validators.required]],
      percent_discount: ['', [Validators.required]],
    });
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.promotionForm.get('dob').setValue(convertDate, {
      onlyself: true,
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.promotionForm.controls[controlName].hasError(errorName);
  };

  /* Update book */
  updatePromotionForm() {
    console.log(this.promotionForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.promotionApi
        .UpdatePromotion(id, this.promotionForm.value)
        .subscribe((res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/promotions-list'));
        });
    }
  }
}