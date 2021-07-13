import { IOnetimeSchedule, IProcessor, IRecurringSchedule } from '../../definition/scheduler';
import { BaseBridge } from './BaseBridge';
export declare abstract class SchedulerBridge extends BaseBridge {
    doRegisterProcessors(processors: Array<IProcessor>, appId: string): Promise<void>;
    doScheduleOnce(job: IOnetimeSchedule, appId: string): Promise<void>;
    doScheduleRecurring(job: IRecurringSchedule, appId: string): Promise<void>;
    doCancelJob(jobId: string, appId: string): Promise<void>;
    doCancelAllJobs(appId: string): Promise<void>;
    doCancelJobByDataQuery(data: object, appId: string): Promise<void>;
    protected abstract registerProcessors(processors: Array<IProcessor>, appId: string): Promise<void>;
    protected abstract scheduleOnce(job: IOnetimeSchedule, appId: string): Promise<void>;
    protected abstract scheduleRecurring(job: IRecurringSchedule, appId: string): Promise<void>;
    protected abstract cancelJob(jobId: string, appId: string): Promise<void>;
    protected abstract cancelAllJobs(appId: string): Promise<void>;
    protected abstract cancelJobByDataQuery(data: object, appId: string): Promise<void>;
    private hasDefaultPermission;
}
