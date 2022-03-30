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
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetStoreForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  storeForm: FormGroup;
  subjectArray: Subject[] = [];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private storeApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.storeApi.GetStore(id).subscribe((data) => {
      console.log(data.subjects);
      this.subjectArray = data.subjects;
      this.storeForm = this.fb.group({
        name: [data.name, [Validators.required]],
        url: [data.url, [Validators.required]],
      });
    });
  }

  /* Reactive book form */
  updateBookForm() {
    this.storeForm = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
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
    this.storeForm.get('dob').setValue(convertDate, {
      onlyself: true,
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.storeForm.controls[controlName].hasError(errorName);
  };

  /* Update book */
  updateStoreForm() {
    console.log(this.storeForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.storeApi
        .UpdateStore(id, this.storeForm.value)
        .subscribe((res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/stores-list'));
        });
    }
  }
}
