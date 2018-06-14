import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
    imports: [CommonModule, VehicleRoutingModule],
    declarations: [VehicleListComponent, DetailComponent]
})
export class VehicleModule {}
