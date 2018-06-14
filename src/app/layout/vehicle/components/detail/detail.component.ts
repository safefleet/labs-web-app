import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {VehicleService} from "../../../../shared/services/vehicle/vehicle.service";

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    // public lat =  0.47;
    // public lng = 3.27;

    // constructor(private vehicleService: VehicleService) {
    //
    // }

    numDeltas = 100;
    delay = 10; // milliseconds
    i = 0;
    deltaLat: number;
    deltaLng: number;
    position: any;
    marker: any;

    @ViewChild('map') map: ElementRef;
    @Input() lat: number;
    @Input() lng: number;
    @Input() zoom: number;

    constructor(private mapsAPILoader: MapsAPILoader,
                private vehicleService: VehicleService
    ) {
        this.lat = 10.35;
        this.lng = 3.48;

        this.timeout();
    }

    timeout() {
        setTimeout(() => {
            // Do Something Here
            // Then recall the parent function to
            // create a recursive loop.
            this.lat += 0.02;
            this.lng += 0.03;

            this.timeout();
        }, 1000);
    }

    ngOnInit() {
        this.position = {lat: this.lat, lng: this.lng};

        this.mapsAPILoader.load().then(() => {
            const map = new google.maps.Map(this.map.nativeElement, {
                zoom: this.zoom,
                center: {lat: this.lat, lng: this.lng}
            });

            this.marker = new google.maps.Marker({
                map: map,
                draggable: true,
                position: {lat: this.lat, lng: this.lng}
            });

            map.addListener('click', (event) => {
                const newPosition = {lat: event.latLng.lat(), lng: event.latLng.lng()};
                this.doMarkerTransition(newPosition);
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.lat.firstChange && changes.lng.firstChange) {
            return;
        }

        const newPosition = {lat: changes.lat.currentValue, lng: changes.lng.currentValue};
        this.doMarkerTransition(newPosition);
    }

    doMarkerTransition(newPosition) {
        this.i = 0;

        this.deltaLat = (newPosition.lat - this.position.lat) / this.numDeltas;
        this.deltaLng = (newPosition.lng - this.position.lng) / this.numDeltas;
        this.moveMarker();
    }

    moveMarker = () => {
        this.position.lat += this.deltaLat;
        this.position.lng += this.deltaLng;
        const latlng = new google.maps.LatLng(this.position.lat, this.position.lng);
        this.marker.setPosition(latlng);
        if (this.i !== this.numDeltas) {
            this.i++;
            setTimeout(this.moveMarker, this.delay);
        }
    }
}




