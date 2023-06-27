const LIST_TYPES = {
	BACKLOG: 'backlog',
	READY: 'ready',
	IN_PROGRESS: 'inProgress',
	DONE: 'done',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.DONE]: 'Done',
}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: '#FFFFFF',
	[LIST_TYPES.READY]: '#FFFFFF',
	[LIST_TYPES.IN_PROGRESS]: '#FFFFFF',
	[LIST_TYPES.DONE]: '#FFFFFF',
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }