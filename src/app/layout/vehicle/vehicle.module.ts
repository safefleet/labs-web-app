import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { DetailComponent } from './detail/detail.component';
import { VehicleListComponent } from './components/list/list.component';

@NgModule({
    imports: [CommonModule, VehicleRoutingModule],
    declarations: [DetailComponent, VehicleListComponent]
})
export class VehicleModule {}
