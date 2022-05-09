import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: './icon-snack-bar-component',
  template: `<span>{{ data?.message }}</span> <mat-icon>{{ data?.icon }}</mat-icon>`,
  styleUrls: ['./icon-snack-bar-component.css'],
})
export class IconSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}