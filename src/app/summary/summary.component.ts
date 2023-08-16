import { Component } from '@angular/core';
import { DataResponse } from 'src/assets/dashboard-mock-response';
import { SummaryService } from '../summary.service';
import { CurrencyPipe, PercentPipe, DecimalPipe } from '@angular/common';

type RowData = Array<string | number>;
type NumberFormats = 'percent' | 'currency' | 'number';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(
    private summaryService: SummaryService,
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe,
    private decimalPipe: DecimalPipe
  ) {}

  summaryDataGrid: RowData[] = [];
  layout: string[] = [];
  totaledDataRow: string[] = [
    'Total',
    '',
    '',
    '0',
    '0',
    '-',
    '0',
    '0',
    '-',
    '0',
    '0',
    '-',
  ];

  getSummaryData(): void {
    this.summaryService.getSummaryData().subscribe((summaryData) => {
      this.summaryDataGrid = this.assembleGridRows(summaryData);
    });
  }

  getSummaryLayout(): void {
    this.summaryService.getSummaryLayout().subscribe((layout) => {
      const columnNames: string[] = [];
      if (layout) {
        for (let i = 0; i < layout?.length; i++) {
          this.layout.push(layout[i].label);
        }
      }
    });
  }

  assembleGridRows(dataset: DataResponse[] | undefined): RowData[] {
    const dataGrid: RowData[] = [];
    if (dataset) {
      for (let row = 0; row < dataset?.length; row++) {
        const newRowOfData: RowData = [];
        newRowOfData.push(dataset[row]['channel']);
        newRowOfData.push(dataset[row]['segment']);
        newRowOfData.push(dataset[row]['tactic']);

        this.totaledDataRow[3] = `${
          Number(Number(dataset[row]['totalSpend']).toFixed(2)) +
          Number(this.totaledDataRow[3])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['totalSpend'], 'currency')
        );

        this.totaledDataRow[4] = `${
          Number(Number(dataset[row]['mediaSpend']).toFixed(2)) +
          Number(this.totaledDataRow[4])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['mediaSpend'], 'currency')
        );

        newRowOfData.push(
          this.numberFormatter(dataset[row]['percInc'], 'percent')
        );

        this.totaledDataRow[6] = `${
          Number(Number(dataset[row]['salesLT']).toFixed(2)) +
          Number(this.totaledDataRow[6])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['salesLT'], 'currency')
        );

        this.totaledDataRow[7] = `${
          Number(Number(dataset[row]['salesI']).toFixed(2)) +
          Number(this.totaledDataRow[7])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['salesI'], 'currency')
        );

        newRowOfData.push(
          this.numberFormatter(dataset[row]['percSalesI'], 'percent')
        );

        this.totaledDataRow[9] = `${
          Number(Number(dataset[row]['ordersLT']).toFixed(2)) +
          Number(this.totaledDataRow[9])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['ordersLT'], 'number')
        );

        this.totaledDataRow[10] = `${
          Number(Number(dataset[row]['ordersI']).toFixed(2)) +
          Number(this.totaledDataRow[10])
        }`;
        newRowOfData.push(
          this.numberFormatter(dataset[row]['ordersI'], 'number')
        );

        newRowOfData.push(
          this.numberFormatter(dataset[row]['percOrdersI'], 'percent')
        );
        dataGrid.push(newRowOfData);
      }
    }
    this.totaledDataRow[3] = `$${Number(
      Number(this.totaledDataRow[3]).toFixed(2)
    )}`;
    this.totaledDataRow[4] = `$${Number(
      Number(this.totaledDataRow[4]).toFixed(2)
    )}`;
    this.totaledDataRow[6] = `$${Number(
      Number(this.totaledDataRow[6]).toFixed(2)
    )}`;
    this.totaledDataRow[7] = `$${Number(
      Number(this.totaledDataRow[7]).toFixed(2)
    )}`;
    this.totaledDataRow[9] = `${Number(
      Number(this.totaledDataRow[9]).toFixed(2)
    )}`;
    this.totaledDataRow[10] = `${Number(
      Number(this.totaledDataRow[10]).toFixed(2)
    )}`;
    return dataGrid;
  }

  numberFormatter(
    unformattedValue: string | number,
    format: NumberFormats
  ): string | number {
    let formattedNumber: string | number = unformattedValue;
    if (format === 'currency') {
      formattedNumber =
        this.currencyPipe.transform(unformattedValue, 'USD') || '';
    } else if (format === 'percent') {
      formattedNumber =
        this.percentPipe.transform(unformattedValue, '1.2-2') || '';
    } else if (format === 'number') {
      formattedNumber =
        this.decimalPipe.transform(unformattedValue, '1.0-0') || '';
    }
    return formattedNumber;
  }

  ngOnInit(): void {
    this.getSummaryData();
    this.getSummaryLayout();
  }
}
