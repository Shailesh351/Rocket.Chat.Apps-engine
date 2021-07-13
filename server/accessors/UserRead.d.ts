import { IUserRead } from '../../definition/accessors';
import { IUser } from '../../definition/users';
import { UserBridge } from '../bridges/UserBridge';
export declare class UserRead implements IUserRead {
    private userBridge;
    private appId;
    constructor(userBridge: UserBridge, appId: string);
    getById(id: string): Promise<IUser>;
    getByUsername(username: string): Promise<IUser>;
    getAppUser(appId?: string): Promise<IUser | undefined>;
}
