import { Injectable } from '@angular/core';

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