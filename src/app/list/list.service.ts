import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AsanaService {
    public data: any;

    constructor() {
    }

    setAsanaInformation(data) {
        this.data = data;
    }

    getAsanaInformation() {
        return this.data;
    }
}