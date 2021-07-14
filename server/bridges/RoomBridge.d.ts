import { IMessage } from '../../definition/messages';
import { IRoom } from '../../definition/rooms';
import { IUser } from '../../definition/users';
import { BaseBridge } from './BaseBridge';
export declare abstract class RoomBridge extends BaseBridge {
    doCreate(room: IRoom, members: Array<string>, appId: string): Promise<string>;
    doGetById(roomId: string, appId: string): Promise<IRoom>;
    doGetByName(roomName: string, appId: string): Promise<IRoom>;
    doGetCreatorById(roomId: string, appId: string): Promise<IUser | undefined>;
    doGetCreatorByName(roomName: string, appId: string): Promise<IUser | undefined>;
    doGetDirectByUsernames(usernames: Array<string>, appId: string): Promise<IRoom | undefined>;
    doGetMembers(roomId: string, appId: string): Promise<Array<IUser>>;
    doUpdate(room: IRoom, members: Array<string>, appId: string): Promise<void>;
    doCreateDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): Promise<string>;
    doDelete(room: string, appId: string): Promise<void>;
    protected abstract create(room: IRoom, members: Array<string>, appId: string): Promise<string>;
    protected abstract getById(roomId: string, appId: string): Promise<IRoom>;
    protected abstract getByName(roomName: string, appId: string): Promise<IRoom>;
    protected abstract getCreatorById(roomId: string, appId: string): Promise<IUser | undefined>;
    protected abstract getCreatorByName(roomName: string, appId: string): Promise<IUser | undefined>;
    protected abstract getDirectByUsernames(usernames: Array<string>, appId: string): Promise<IRoom | undefined>;
    protected abstract getMembers(roomId: string, appId: string): Promise<Array<IUser>>;
    protected abstract update(room: IRoom, members: Array<string>, appId: string): Promise<void>;
    protected abstract createDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): Promise<string>;
    protected abstract delete(room: string, appId: string): Promise<void>;
    private hasWritePermission;
    private hasReadPermission;
}