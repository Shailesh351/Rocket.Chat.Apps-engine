"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerBridge = void 0;
const PermissionDeniedError_1 = require("../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../managers/AppPermissionManager");
const AppPermissions_1 = require("../permissions/AppPermissions");
const BaseBridge_1 = require("./BaseBridge");
class SchedulerBridge extends BaseBridge_1.BaseBridge {
    doRegisterProcessors(processors = [], appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.registerProcessors(processors, appId);
            }
        });
    }
    doScheduleOnce(job, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.scheduleOnce(job, appId);
            }
        });
    }
    doScheduleRecurring(job, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.scheduleRecurring(job, appId);
            }
        });
    }
    doCancelJob(jobId, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.cancelJob(jobId, appId);
            }
        });
    }
    doCancelAllJobs(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.cancelAllJobs(appId);
            }
        });
    }
    doCancelJobByDataQuery(data, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasDefaultPermission(appId)) {
                return this.cancelJobByDataQuery(data, appId);
            }
        });
    }
    hasDefaultPermission(appId) {
        if (AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.scheduler.default)) {
            return true;
        }
        AppPermissionManager_1.AppPermissionManager.notifyAboutError(new PermissionDeniedError_1.PermissionDeniedError({
            appId,
            missingPermissions: [AppPermissions_1.AppPermissions.scheduler.default],
        }));
        return false;
    }
}
exports.SchedulerBridge = SchedulerBridge;

//# sourceMappingURL=SchedulerBridge.js.map
