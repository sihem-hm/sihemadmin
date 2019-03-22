import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges } from '@angular/core';
import { ChartData, ChartLegendOptions, ChartOptions, ChartType } from 'chart.js';
export declare class ChartjsComponent implements AfterViewInit, OnChanges {
    private zone;
    chartInstance: any;
    ref: ElementRef<HTMLCanvasElement>;
    chartClick: EventEmitter<ChartClickEvent>;
    /** chart type */
    type: ChartType | string;
    data: ChartData | any;
    height: number;
    width: number;
    legend: ChartLegendOptions | any;
    options: ChartOptions | any;
    plugins: any[];
    redraw: boolean;
    datasetKeyProvider: (x: any) => string;
    constructor(zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    updateChart(): void;
    renderChart(): void;
    transformData(): any;
    handleOnClick($event: Event): void;
}
export interface ChartClickEvent {
    elements: any[];
    element: any;
    dataset: any[];
    $event: Event;
}
