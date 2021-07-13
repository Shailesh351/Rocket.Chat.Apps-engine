import { ISchedulerModify } from '../../definition/accessors';
import { IOnetimeSchedule, IRecurringSchedule } from '../../definition/scheduler';
import { SchedulerBridge } from '../bridges';
export declare class SchedulerModify implements ISchedulerModify {
    private readonly bridge;
    private readonly appId;
    constructor(bridge: SchedulerBridge, appId: string);
    scheduleOnce(job: IOnetimeSchedule): Promise<void>;
    scheduleRecurring(job: IRecurringSchedule): Promise<void>;
    cancelJob(jobId: string): Promise<void>;
    cancelAllJobs(): Promise<void>;
    cancelJobByDataQuery(data: object): Promise<void>;
}
