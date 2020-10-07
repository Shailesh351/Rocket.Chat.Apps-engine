"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessors_1 = require("../accessors");
class AppAccessorManager {
    constructor(manager) {
        this.manager = manager;
        this.bridges = this.manager.getBridges();
        this.configExtenders = new Map();
        this.envReaders = new Map();
        this.configModifiers = new Map();
        this.readers = new Map();
        this.modifiers = new Map();
        this.persists = new Map();
        this.https = new Map();
    }
    /**
     * Purifies the accessors for the provided App.
     *
     * @param appId The id of the App to purge the accessors for.
     */
    purifyApp(appId) {
        this.configExtenders.delete(appId);
        this.envReaders.delete(appId);
        this.configModifiers.delete(appId);
        this.readers.delete(appId);
        this.modifiers.delete(appId);
        this.persists.delete(appId);
        this.https.delete(appId);
    }
    getConfigurationExtend(appId) {
        if (!this.configExtenders.has(appId)) {
            const rl = this.manager.getOneById(appId);
            if (!rl) {
                throw new Error(`No App found by the provided id: ${appId}`);
            }
            const htt = new accessors_1.HttpExtend();
            const cmds = new accessors_1.SlashCommandsExtend(this.manager.getCommandManager(), appId);
            const apis = new accessors_1.ApiExtend(this.manager.getApiManager(), appId);
            const sets = new accessors_1.SettingsExtend(rl);
            const excs = new accessors_1.ExternalComponentsExtend(this.manager.getExternalComponentManager(), appId);
            this.configExtenders.set(appId, new accessors_1.ConfigurationExtend(htt, sets, cmds, apis, excs));
        }
        return this.configExtenders.get(appId);
    }
    getEnvironmentRead(appId) {
        if (!this.envReaders.has(appId)) {
            const rl = this.manager.getOneById(appId);
            if (!rl) {
                throw new Error(`No App found by the provided id: ${appId}`);
            }
            const sets = new accessors_1.SettingRead(rl);
            const servsets = new accessors_1.ServerSettingRead(this.bridges.getServerSettingBridge(), appId);
            const env = new accessors_1.EnvironmentalVariableRead(this.bridges.getEnvironmentalVariableBridge(), appId);
            this.envReaders.set(appId, new accessors_1.EnvironmentRead(sets, servsets, env));
        }
        return this.envReaders.get(appId);
    }
    getConfigurationModify(appId) {
        if (!this.configModifiers.has(appId)) {
            const sets = new accessors_1.ServerSettingsModify(this.bridges.getServerSettingBridge(), appId);
            const cmds = new accessors_1.SlashCommandsModify(this.manager.getCommandManager(), appId);
            this.configModifiers.set(appId, new accessors_1.ConfigurationModify(sets, cmds));
        }
        return this.configModifiers.get(appId);
    }
    getReader(appId) {
        if (!this.readers.has(appId)) {
            const env = this.getEnvironmentRead(appId);
            const msg = new accessors_1.MessageRead(this.bridges.getMessageBridge(), appId);
            const persist = new accessors_1.PersistenceRead(this.bridges.getPersistenceBridge(), appId);
            const room = new accessors_1.RoomRead(this.bridges.getRoomBridge(), appId);
            const user = new accessors_1.UserRead(this.bridges.getUserBridge(), appId);
            const noti = new accessors_1.Notifier(this.bridges.getUserBridge(), this.bridges.getMessageBridge(), appId);
            const livechat = new accessors_1.LivechatRead(this.bridges.getLivechatBridge(), appId);
            const upload = new accessors_1.UploadRead(this.bridges.getUploadBridge(), appId);
            this.readers.set(appId, new accessors_1.Reader(env, msg, persist, room, user, noti, livechat, upload));
        }
        return this.readers.get(appId);
    }
    getModifier(appId) {
        if (!this.modifiers.has(appId)) {
            this.modifiers.set(appId, new accessors_1.Modify(this.bridges, appId));
        }
        return this.modifiers.get(appId);
    }
    getPersistence(appId) {
        if (!this.persists.has(appId)) {
            this.persists.set(appId, new accessors_1.Persistence(this.bridges.getPersistenceBridge(), appId));
        }
        return this.persists.get(appId);
    }
    getHttp(appId) {
        if (!this.https.has(appId)) {
            let ext;
            if (this.configExtenders.has(appId)) {
                ext = this.configExtenders.get(appId).http;
            }
            else {
                const cf = this.getConfigurationExtend(appId);
                ext = cf.http;
            }
            this.https.set(appId, new accessors_1.Http(this, this.bridges, ext, appId));
        }
        return this.https.get(appId);
    }
}
exports.AppAccessorManager = AppAccessorManager;

//# sourceMappingURL=AppAccessorManager.js.map
