/// <reference types="koa" />
/// <reference types="koa-router" />
/// <reference types="koa-bodyparser" />
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { ServerPlugin } from '@seatbelt/core/plugins';
export interface IServerConfig {
    port?: number;
}
export declare class KoaServer implements ServerPlugin.BaseServer {
    private log;
    server: Koa;
    port: number;
    router: Router;
    constructor(config?: IServerConfig);
    conformServerControllerToSeatbeltController: Function;
    config: ServerPlugin.Config;
    init: ServerPlugin.Init;
}
