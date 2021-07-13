import { IMessageBuilder } from '../../definition/accessors';
import { IMessage, IMessageAttachment } from '../../definition/messages';
import { RocketChatAssociationModel } from '../../definition/metadata';
import { IRoom } from '../../definition/rooms';
import { BlockBuilder, IBlock } from '../../definition/uikit';
import { IUser } from '../../definition/users';
export declare class MessageBuilder implements IMessageBuilder {
    kind: RocketChatAssociationModel.MESSAGE;
    private msg;
    constructor(message?: IMessage);
    setData(data: IMessage): IMessageBuilder;
    setUpdateData(data: IMessage, editor: IUser): IMessageBuilder;
    setThreadId(threadId: string): IMessageBuilder;
    getThreadId(): string;
    setRoom(room: IRoom): IMessageBuilder;
    getRoom(): IRoom;
    setSender(sender: IUser): IMessageBuilder;
    getSender(): IUser;
    setText(text: string): IMessageBuilder;
    getText(): string;
    setEmojiAvatar(emoji: string): IMessageBuilder;
    getEmojiAvatar(): string;
    setAvatarUrl(avatarUrl: string): IMessageBuilder;
    getAvatarUrl(): string;
    setUsernameAlias(alias: string): IMessageBuilder;
    getUsernameAlias(): string;
    addAttachment(attachment: IMessageAttachment): IMessageBuilder;
    setAttachments(attachments: Array<IMessageAttachment>): IMessageBuilder;
    getAttachments(): Array<IMessageAttachment>;
    replaceAttachment(position: number, attachment: IMessageAttachment): IMessageBuilder;
    removeAttachment(position: number): IMessageBuilder;
    setEditor(user: IUser): IMessageBuilder;
    getEditor(): IUser;
    setGroupable(groupable: boolean): IMessageBuilder;
    getGroupable(): boolean;
    setParseUrls(parseUrls: boolean): IMessageBuilder;
    getParseUrls(): boolean;
    getMessage(): IMessage;
    addBlocks(blocks: BlockBuilder | Array<IBlock>): this;
    setBlocks(blocks: BlockBuilder | Array<IBlock>): this;
    getBlocks(): IBlock[];
}
