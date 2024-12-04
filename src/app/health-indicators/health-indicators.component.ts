import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { WeightType } from '../models/patient-dashboard/weight-type';
import { BPSystolicDiastolicType } from '../models/patient-dashboard/bpsystolic-diastolic-type';
import { HeartRateType } from '../models/patient-dashboard/heart-rate-type';
import { GlucoseType } from '../models/patient-dashboard/glucose-type';
import { CholesterolHDLLDLType } from '../models/patient-dashboard/cholesterol-hdlldltype';
import { TotalCholesterolType } from '../models/patient-dashboard/total-cholesterol-type';
import { PatientDashboardService } from '../services/patient-dashboard.service';

@Component({
  selector: 'app-health-indicators',
  imports: [IgxCategoryChartModule],
  templateUrl: './health-indicators.component.html',
  styleUrls: ['./health-indicators.component.scss']
})
export class HealthIndicatorsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public patientDashboardWeight: WeightType[] = [];
  public patientDashboardHeartRate: HeartRateType[] = [];
  public patientDashboardBPSystolicDiastolic: BPSystolicDiastolicType[] = [];
  public patientDashboardGlucose: GlucoseType[] = [];
  public patientDashboardTotalCholesterol: TotalCholesterolType[] = [];
  public patientDashboardCholesterolHDLLDL: CholesterolHDLLDLType[] = [];

  constructor(private patientDashboardService: PatientDashboardService) { }

  ngOnInit() {
    this.patientDashboardService.getWeightList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardWeight = data);
    this.patientDashboardService.getHeartRateList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardHeartRate = data);
    this.patientDashboardService.getBPSystolicDiastolicList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardBPSystolicDiastolic = data);
    this.patientDashboardService.getGlucoseList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardGlucose = data);
    this.patientDashboardService.getTotalCholesterolList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardTotalCholesterol = data);
    this.patientDashboardService.getCholesterolHDLLDLList().pipe(takeUntil(this.destroy$)).subscribe(data => this.patientDashboardCholesterolHDLLDL = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
