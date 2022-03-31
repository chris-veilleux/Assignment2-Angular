import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css'],
})
export class AddSportComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetSportForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  sportForm: FormGroup;
  playerArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private sportApi: ApiService
  ) {}

  /* Reactive book form */
  submitBookForm() {
    this.sportForm = this.fb.group({
      name: ['', [Validators.required]],
      players: [this.playerArray],
    });
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.playerArray.length < 5) {
      this.playerArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.playerArray.indexOf(subject);
    if (index >= 0) {
      this.playerArray.splice(index, 1);
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

  /* Submit book */
  submitSportForm() {
    if (this.sportForm.valid) {
      this.sportApi.AddSport(this.sportForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('sports-list'));
      });
    }
  }
}
