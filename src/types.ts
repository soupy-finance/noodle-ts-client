export enum OrderType {
	Limit = "limit",
	Market = "market",
}

export interface OrderFlags {
	"fill_or_kill"?: boolean;
	"immediate_or_cancel"?: boolean;
	"post_only"?: boolean;	
}