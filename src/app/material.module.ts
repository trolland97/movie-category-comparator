import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        FlexLayoutModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        FlexLayoutModule,
        MatMenuModule
    ]
})

export class MaterialModule { }