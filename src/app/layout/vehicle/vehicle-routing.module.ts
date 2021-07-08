import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './components/list/list.component';
import {DetailComponent} from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: VehicleListComponent
    },
    {
        path: 'details',
        component: DetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehicleRoutingModule {}
