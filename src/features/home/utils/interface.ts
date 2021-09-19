export interface Logs {
	[index: string]: any;
	account: Log[];
	workspace: Log[];
	sprint: Log[];
	card: Log[];
	thread: Log[];
	directMessage: Log[];
	all: Log[];
	count: {
		account: number;
		workspace: number;
		sprint: number;
		card: number;
		thread: number;
		directMessage: number;
		all: number;
	};
}

export interface Log {
	ID: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	DeletedAt: Date | null;
	Api: string;
	Status: string;
	Latency: string;
	Method: string;
}
