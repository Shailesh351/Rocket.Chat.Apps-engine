import { IDepartment, ILivechatMessage, ILivechatRoom, ILivechatTransferData, IVisitor } from '../../definition/livechat';
import { IUser } from '../../definition/users';
import { BaseBridge } from './BaseBridge';
export declare abstract class LivechatBridge extends BaseBridge {
    doIsOnline(departmentId?: string, appId?: string): boolean;
    doIsOnlineAsync(departmentId?: string, appId?: string): Promise<boolean>;
    doCreateMessage(message: ILivechatMessage, appId: string): Promise<string>;
    doGetMessageById(messageId: string, appId: string): Promise<ILivechatMessage>;
    doUpdateMessage(message: ILivechatMessage, appId: string): Promise<void>;
    doCreateVisitor(visitor: IVisitor, appId: string): Promise<string>;
    doFindVisitors(query: object, appId: string): Promise<Array<IVisitor>>;
    doFindVisitorById(id: string, appId: string): Promise<IVisitor | undefined>;
    doFindVisitorByEmail(email: string, appId: string): Promise<IVisitor | undefined>;
    doFindVisitorByToken(token: string, appId: string): Promise<IVisitor | undefined>;
    doFindVisitorByPhoneNumber(phoneNumber: string, appId: string): Promise<IVisitor | undefined>;
    doTransferVisitor(visitor: IVisitor, transferData: ILivechatTransferData, appId: string): Promise<boolean>;
    doCreateRoom(visitor: IVisitor, agent: IUser, appId: string): Promise<ILivechatRoom>;
    doCloseRoom(room: ILivechatRoom, comment: string, appId: string): Promise<boolean>;
    doFindRooms(visitor: IVisitor, departmentId: string | null, appId: string): Promise<Array<ILivechatRoom>>;
    doFindDepartmentByIdOrName(value: string, appId: string): Promise<IDepartment | undefined>;
    doFindDepartmentsEnabledWithAgents(appId: string): Promise<Array<IDepartment>>;
    doSetCustomFields(data: {
        token: IVisitor['token'];
        key: string;
        value: string;
        overwrite: boolean;
    }, appId: string): Promise<number>;
    /**
     * @deprecated please use the `isOnlineAsync` method instead.
     * In the next major, this method will be `async`
     */
    protected abstract isOnline(departmentId?: string, appId?: string): boolean;
    protected abstract isOnlineAsync(departmentId?: string, appId?: string): Promise<boolean>;
    protected abstract createMessage(message: ILivechatMessage, appId: string): Promise<string>;
    protected abstract getMessageById(messageId: string, appId: string): Promise<ILivechatMessage>;
    protected abstract updateMessage(message: ILivechatMessage, appId: string): Promise<void>;
    protected abstract createVisitor(visitor: IVisitor, appId: string): Promise<string>;
    /**
     * @deprecated This method does not adhere to the conversion practices applied
     * elsewhere in the Apps-Engine and will be removed in the next major version.
     * Prefer other methods that fetch visitors.
     */
    protected abstract findVisitors(query: object, appId: string): Promise<Array<IVisitor>>;
    protected abstract findVisitorById(id: string, appId: string): Promise<IVisitor | undefined>;
    protected abstract findVisitorByEmail(email: string, appId: string): Promise<IVisitor | undefined>;
    protected abstract findVisitorByToken(token: string, appId: string): Promise<IVisitor | undefined>;
    protected abstract findVisitorByPhoneNumber(phoneNumber: string, appId: string): Promise<IVisitor | undefined>;
    protected abstract transferVisitor(visitor: IVisitor, transferData: ILivechatTransferData, appId: string): Promise<boolean>;
    protected abstract createRoom(visitor: IVisitor, agent: IUser, appId: string): Promise<ILivechatRoom>;
    protected abstract closeRoom(room: ILivechatRoom, comment: string, appId: string): Promise<boolean>;
    protected abstract findRooms(visitor: IVisitor, departmentId: string | null, appId: string): Promise<Array<ILivechatRoom>>;
    protected abstract findDepartmentByIdOrName(value: string, appId: string): Promise<IDepartment | undefined>;
    protected abstract findDepartmentsEnabledWithAgents(appId: string): Promise<Array<IDepartment>>;
    protected abstract setCustomFields(data: {
        token: IVisitor['token'];
        key: string;
        value: string;
        overwrite: boolean;
    }, appId: string): Promise<number>;
    private hasReadPermission;
    private hasWritePermission;
    private hasMultiplePermission;
}