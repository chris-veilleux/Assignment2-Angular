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
  selector: 'app-edit-sport',
  templateUrl: './edit-sport.component.html',
  styleUrls: ['./edit-sport.component.css'],
})
export class EditSportComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetSportForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  sportForm: FormGroup;
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
    private sportApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.sportApi.GetSport(id).subscribe((data) => {
      console.log(data.subjects);
      this.subjectArray = data.subjects;
      this.sportForm = this.fb.group({
        name: [data.name, [Validators.required]],
        players: [data.players, [Validators.required]],
      });
    });
  }

  /* Reactive book form */
  updateBookForm() {
    this.sportForm = this.fb.group({
      name: ['', [Validators.required]],
      players: ['', [Validators.required]],
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
    this.sportForm.get('dob').setValue(convertDate, {
      onlyself: true,
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.sportForm.controls[controlName].hasError(errorName);
  };

  /* Update book */
  updateSportForm() {
    console.log(this.sportForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.sportApi
        .UpdateSport(id, this.sportForm.value)
        .subscribe((res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/sports-list'));
        });
    }
  }
}