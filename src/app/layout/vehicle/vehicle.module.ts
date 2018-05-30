import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './components/list/list.component';

@NgModule({
    imports: [CommonModule, VehicleRoutingModule],
    declarations: [VehicleListComponent]
})
export class VehicleModule {}
