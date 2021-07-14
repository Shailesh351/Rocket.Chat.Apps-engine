"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRead = void 0;
class RoomRead {
    constructor(roomBridge, appId) {
        this.roomBridge = roomBridge;
        this.appId = appId;
    }
    getById(id) {
        return this.roomBridge.doGetById(id, this.appId);
    }
    getCreatorUserById(id) {
        return this.roomBridge.doGetCreatorById(id, this.appId);
    }
    getByName(name) {
        return this.roomBridge.doGetByName(name, this.appId);
    }
    getCreatorUserByName(name) {
        return this.roomBridge.doGetCreatorByName(name, this.appId);
    }
    getMessages(roomId) {
        throw new Error('Method not implemented.');
    }
    getMembers(roomId) {
        return this.roomBridge.doGetMembers(roomId, this.appId);
    }
    getDirectByUsernames(usernames) {
        return this.roomBridge.doGetDirectByUsernames(usernames, this.appId);
    }
}
exports.RoomRead = RoomRead;

//# sourceMappingURL=RoomRead.js.map