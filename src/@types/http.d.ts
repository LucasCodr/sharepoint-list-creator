declare module "http" {
    export interface IncomingHttpHeaders {
        username: string;
        password: string;
        site_url: string;
    }
}