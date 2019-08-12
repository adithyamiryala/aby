import { Injectable } from '@angular/core';

@Injectable()
export class PranayamamService {
    public data: any;

    constructor() {
    }

    setPranayamaInformation(data) {
        this.data = data;
    }

    getPranayamaInformation() {
        return this.data;
    }
}